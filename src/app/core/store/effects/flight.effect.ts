import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';

import { AvailabilityService, TripService } from '../../services';

import {
	AppClearErrors, AppAddError,
	FlightActionTypes, FlightSearch, FlightLowFareSearch, FlightCombinedSearch, FlightAddSearchResult, FlightAddLowFareSearchResult, FlightClearSearchResults, FlightSellTrip,
	BookingSetData, BookingReset,
	ShoppingCartClearVisitedPages,
	SsrLoadAvailability
} from '../actions';

import { mapTrip } from '../../../shared/utilities';

@Injectable()
export class FlightEffects {
	constructor(
		private actions$: Actions,
		private router: Router,
		private availabilityService: AvailabilityService,
		private tripService: TripService
	) { }

	@Effect()
	search$: Observable<Action> = this.actions$
		.pipe(
			ofType<FlightSearch>(FlightActionTypes.SEARCH),
			mergeMap(action => this.availabilityService.searchAvailability(action.payload)
				.pipe(
					map(payload => {
						if (!payload || !payload.availability) {
							return new FlightAddSearchResult({
								search: action.payload,
								data: {
									availability: {
										trips: []
									}
								}
							});
						}

						return new FlightAddSearchResult({
							search: action.payload,
							data: {
								...payload,
								availability: {
									...payload.availability,
									trips: payload.availability.trips.map(trip => mapTrip(trip, payload))
								}
							}
						});
					}),
					catchError(error => of(new AppAddError(error)))
				)
			)
		);

	@Effect()
	lowFareSearch$: Observable<Action> = this.actions$
		.pipe(
			ofType<FlightLowFareSearch>(FlightActionTypes.LOW_FARE_SEARCH),
			mergeMap(action => this.availabilityService.searchAvailabilityLowFare(action.payload)
				.pipe(
					map(payload => {
						if (!payload) {
							return new FlightAddLowFareSearchResult(null);
						}

						return new FlightAddLowFareSearchResult({
							search: action.payload,
							data: payload.data
						});
					}),
					catchError(error => of(new AppAddError(error)))
				)
			)
		);

	@Effect()
	combinedSearch$: Observable<Action> = this.actions$
		.pipe(
			ofType<FlightCombinedSearch>(FlightActionTypes.COMBINED_SEARCH),
			mergeMap(action => {
				const actions: Action[] = [
					new BookingReset(),
					new ShoppingCartClearVisitedPages(),
					new FlightClearSearchResults()
				];

				const searches = [{
					originStationCode: action.payload.criteria.originStationCode,
					destinationStationCode: action.payload.criteria.destinationStationCode,
					date: action.payload.criteria.dates[0]
				}];

				if (action.payload.flightType === 'roundTrip') {
					searches.push({
						originStationCode: action.payload.criteria.destinationStationCode,
						destinationStationCode: action.payload.criteria.originStationCode,
						date: action.payload.criteria.dates[1]
					});
				}

				return actions
					.concat(searches.map((search, index) => new FlightLowFareSearch({
						index: index,
						...search,
						adultCount: action.payload.criteria.adultCount,
						childCount: action.payload.criteria.childCount
					})))
					.concat(searches.map((search, index) => new FlightSearch({
						index: index,
						...search,
						adultCount: action.payload.criteria.adultCount,
						childCount: action.payload.criteria.childCount
					})));
			})
		);

	@Effect()
	sellTrip$: Observable<Action> = this.actions$
		.pipe(
			ofType<FlightSellTrip>(FlightActionTypes.SELL_TRIP),
			mergeMap(action => concat(
				of(new AppClearErrors()),
				this.tripService.sellTrip(action.payload)
					.pipe(
						mergeMap(payload => {
							this.router.navigateByUrl('/book/passenger');

							return [
								new BookingSetData(payload && payload.data),
								new SsrLoadAvailability()
							];
						}),
						catchError(error => of(new AppAddError(error)))
					)
			))
		);
}
