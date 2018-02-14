import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { withLatestFrom, mergeMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

import * as fromRoot from '../reducers';
import * as AppActions from '../actions/app.action';
import * as AvailabilityActions from '../actions/availability.action';
import * as BookingActions from '../actions/booking.action';
import { NavitaireApiService } from '../../services/navitaire-api.service';

@Injectable()
export class AvailabilityEffects {
	constructor(
		private router: Router,
		private store: Store<fromRoot.CoreState>,
		private actions: Actions,
		private api: NavitaireApiService
	) { }

	@Effect()
	getStations$: Observable<Action> = this.actions
		.ofType(AvailabilityActions.GET_STATIONS)
		.pipe(
			mergeMap(action => {
				this.store.dispatch(new AppActions.ClearErrors());
				return this.api.getStations()
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppActions.AddError(error));
							return of(null);
						})
					);
			}),
			map(payload => new AvailabilityActions.SetStations(payload && payload.data))
		);

	@Effect()
	searchLowFare$: Observable<Action> = this.actions
		.ofType(
			AvailabilityActions.ADD_WEEK_TO_LOW_FARE_DATE,
			AvailabilityActions.SUBTRACT_WEEK_FROM_LOW_FARE_DATE,
			AvailabilityActions.SEARCH
		)
		.pipe(
			withLatestFrom(this.store),
			mergeMap(([action, state]) => {
				this.store.dispatch(new AppActions.ClearErrors());
				return this.api.searchAvailabilityLowFare(
					state.availability.origin.stationCode,
					state.availability.destination.stationCode,
					state.availability.lowFareDate
				)
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppActions.AddError(error));
							return of(null);
						})
					);
			}),
			map(payload => new AvailabilityActions.SetLowFareData(payload && payload.data)),
			tap(() => this.router.navigateByUrl('/book'))
		);

	@Effect()
	search$: Observable<Action> = this.actions
		.ofType(AvailabilityActions.SEARCH)
		.pipe(
			withLatestFrom(this.store),
			mergeMap(([action, state]) => {
				this.store.dispatch(new AppActions.ClearErrors());
				return this.api.searchAvailability(
					state.availability.origin.stationCode,
					state.availability.destination.stationCode,
					state.availability.beginDate
				)
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppActions.AddError(error));
							return of(null);
						})
					);
			}),
			map(payload => new AvailabilityActions.SetAvailabilityData(payload && payload.data)),
			tap(() => this.router.navigateByUrl('/book'))
		);

	@Effect()
	sellTrip$: Observable<Action> = this.actions
		.ofType<AvailabilityActions.SellTrip>(AvailabilityActions.SELL_TRIP)
		.pipe(
			mergeMap(action => {
				this.store.dispatch(new AppActions.ClearErrors());
				return this.api.sellTrip(
					action.payload.journeyKey,
					action.payload.fareKey
				)
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppActions.AddError(error));
							return empty();
						})
					);
			}),
			map(payload => new BookingActions.SetData(payload && payload.data)),
			tap(() => this.router.navigateByUrl('/book/passenger'))
		);
}
