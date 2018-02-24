import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { withLatestFrom, mergeMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

import { CoreState } from '../../store/reducers';

import {
	AppClearErrors, AppAddError,
	AvailabilityActionTypes, AvailabilitySetStations, AvailabilitySearch, AvailabilitySetData, AvailabilityLowFareSearch, AvailabilitySetLowFareData, AvailabilitySellTrip,
	BookingSetData
} from '../../store/actions';

import { NavitaireApiService } from '../../services/navitaire-api.service';

@Injectable()
export class AvailabilityEffects {
	constructor(
		private router: Router,
		private store: Store<CoreState>,
		private actions: Actions,
		private api: NavitaireApiService
	) { }

	@Effect()
	getStations$: Observable<Action> = this.actions
		.ofType(AvailabilityActionTypes.GET_STATIONS)
		.pipe(
			mergeMap(action => {
				this.store.dispatch(new AppClearErrors());
				return this.api.getStations()
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppAddError(error));
							return of(null);
						})
					);
			}),
			map(payload => new AvailabilitySetStations(payload && payload.data))
		);

	@Effect()
	search$: Observable<Action> = this.actions
		.ofType<AvailabilitySearch>(AvailabilityActionTypes.SEARCH)
		.pipe(
			mergeMap(action => {
				this.store.dispatch(new AppClearErrors());
				return this.api.searchAvailability(action.payload)
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppAddError(error));
							return of(null);
						})
					);
			}),
			map(payload => new AvailabilitySetData(payload && payload.data)),
			tap(() => this.router.navigateByUrl('/book'))
		);

	@Effect()
	searchLowFare$: Observable<Action> = this.actions
		.ofType<AvailabilityLowFareSearch>(AvailabilityActionTypes.LOW_FARE_SEARCH)
		.pipe(
			mergeMap(action => {
				this.store.dispatch(new AppClearErrors());
				return this.api.searchAvailabilityLowFare(action.payload)
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppAddError(error));
							return of(null);
						})
					);
			}),
			map(payload => new AvailabilitySetLowFareData(payload && payload.data)),
			tap(() => this.router.navigateByUrl('/book'))
		);

	@Effect()
	sellTrip$: Observable<Action> = this.actions
		.ofType<AvailabilitySellTrip>(AvailabilityActionTypes.SELL_TRIP)
		.pipe(
			mergeMap(action => {
				this.store.dispatch(new AppClearErrors());
				return this.api.sellTrip(
					action.payload.journeyKey,
					action.payload.fareKey
				)
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppAddError(error));
							return empty();
						})
					);
			}),
			map(payload => new BookingSetData(payload && payload.data)),
			tap(() => this.router.navigateByUrl('/book/hotel'))
		);
}
