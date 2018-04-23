import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { withLatestFrom, map, tap, mergeMap } from 'rxjs/operators';

import { LocalStorageService } from '../../services';

import { CoreState } from '../reducers';
import { currentUrlState } from '../selectors';

import {
	AppActionTypes, AppClearErrors,
	AvailabilityActionTypes,
	AvailabilityInitSearchInput, AvailabilitySetSearchInput, AvailabilityFlightSearch, AvailabilityFlightCarSearch, AvailabilityFlightHotelSearch, AvailabilityFlightHotelCarSearch,
	FlightCombinedSearch, PackageCarSearch, PackageHotelSearch
} from '../actions';

import { INITIAL_STATE } from '../reducers/availability.reducer';

@Injectable()
export class AvailabilityEffects {
	constructor(
		private actions$: Actions,
		private store: Store<CoreState>,
		private router: Router,
		private storage: LocalStorageService
	) { }

	@Effect()
	initSearchInput$: Observable<Action> = this.actions$
		.pipe(
			ofType(AppActionTypes.START),
			map(() => new AvailabilityInitSearchInput({
				...INITIAL_STATE.searchInput,
				criteria: {
					...INITIAL_STATE.searchInput.criteria,
					originStationCode: this.storage.getItem('originStationCode'),
					destinationStationCode: this.storage.getItem('destinationStationCode')
				}
			}))
		);

	@Effect({ dispatch: false })
	storeSearchInput$: Observable<Action> = this.actions$
		.pipe(
			ofType(AvailabilityActionTypes.SET_SEARCH_INPUT),
			tap<AvailabilitySetSearchInput>(action => {
				this.storage.setItem('originStationCode', action.payload.criteria.originStationCode);
				this.storage.setItem('destinationStationCode', action.payload.criteria.destinationStationCode);
			})
		);

	@Effect()
	searchFlights$: Observable<Action> = this.actions$
		.pipe(
			ofType<AvailabilityFlightSearch>(AvailabilityActionTypes.FLIGHT_SEARCH),
			withLatestFrom(this.store.pipe(select(currentUrlState))),
			mergeMap(([action, currentUrl]) => {
				switch (currentUrl) {
					case '/':
					case '/book': {
						this.router.navigateByUrl('/book/flights');
					}
				}

				return [
					new AppClearErrors(),
					new FlightCombinedSearch(action.payload)
				];
			})
		);

	@Effect()
	searchFlightsCars$: Observable<Action> = this.actions$
		.pipe(
			ofType<AvailabilityFlightCarSearch>(AvailabilityActionTypes.FLIGHT_CAR_SEARCH),
			withLatestFrom(this.store.pipe(select(currentUrlState))),
			mergeMap(([action, currentUrl]) => {
				switch (currentUrl) {
					case '/':
					case '/book': {
						this.router.navigateByUrl('/book/flights-cars');
					}
				}

				return [
					new AppClearErrors(),
					new FlightCombinedSearch(action.payload),
					new PackageCarSearch(action.payload)
				];
			})
		);

	@Effect()
	searchFlightsHotels$: Observable<Action> = this.actions$
		.pipe(
			ofType<AvailabilityFlightHotelSearch>(AvailabilityActionTypes.FLIGHT_HOTEL_SEARCH),
			withLatestFrom(this.store.pipe(select(currentUrlState))),
			mergeMap(([action, currentUrl]) => {
				switch (currentUrl) {
					case '/':
					case '/book': {
						this.router.navigateByUrl('/book/flights-hotels');
					}
				}

				return [
					new AppClearErrors(),
					new FlightCombinedSearch(action.payload),
					new PackageHotelSearch(action.payload)
				];
			})
		);

	@Effect()
	searchFlightsHotelsCars$: Observable<Action> = this.actions$
		.pipe(
			ofType<AvailabilityFlightHotelCarSearch>(AvailabilityActionTypes.FLIGHT_HOTEL_CAR_SEARCH),
			withLatestFrom(this.store.pipe(select(currentUrlState))),
			mergeMap(([action, currentUrl]) => {
				switch (currentUrl) {
					case '/':
					case '/book': {
						this.router.navigateByUrl('/book/hotels');
					}
				}

				return [
					new AppClearErrors(),
					new FlightCombinedSearch(action.payload)
				];
			})
		);
}
