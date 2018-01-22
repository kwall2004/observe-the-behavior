import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/from';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as fromRoot from '../reducers';
import * as AppActions from '../app/actions';
import * as AvailabilityActions from './actions';
import * as BookingActions from '../booking/actions';
import { NavitaireApiService } from '../../services/navitaire-api.service';

@Injectable()
export class AvailabilityEffects {
  constructor(
    private api: NavitaireApiService,
    private actions: Actions,
    private router: Router,
    private store: Store<fromRoot.State>
  ) { }

  @Effect()
  getCities$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.GetCities>(AvailabilityActions.GET_CITIES)
    .mergeMap(action => {
      this.store.dispatch(new AppActions.ClearErrors());
      return this.api.getCities()
        .catch(error => {
          this.store.dispatch(new AppActions.AddError(error));
          return Observable.of(null);
        });
    })
    .map(payload => new AvailabilityActions.SetCities(payload && payload['data']));

  @Effect()
  getStations$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.GetCities>(AvailabilityActions.GET_STATIONS)
    .mergeMap(action => {
      this.store.dispatch(new AppActions.ClearErrors());
      return this.api.getStations()
        .catch(error => {
          this.store.dispatch(new AppActions.AddError(error));
          return Observable.of(null);
        });
    })
    .map(payload => new AvailabilityActions.SetStations(payload && payload['data']));

  @Effect()
  addWeekToLowFareBeginDate$: Observable<Action> = this.actions
    .ofType(
    AvailabilityActions.ADD_WEEK_TO_LOW_FARE_DATE,
    AvailabilityActions.SUBTRACT_WEEK_FROM_LOW_FARE_DATE
    )
    .map(action => new AvailabilityActions.SearchLowFare());

  @Effect()
  searchLowFare$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.Search>(AvailabilityActions.SEARCH_LOW_FARE)
    .withLatestFrom(this.store)
    .mergeMap(([action, state]) => {
      this.store.dispatch(new AppActions.ClearErrors());
      return this.api.searchAvailabilityLowFare(
        state.availability.origin,
        state.availability.destination,
        state.availability.lowFareDate
      )
        .catch(error => {
          this.store.dispatch(new AppActions.AddError(error));
          return Observable.of(null);
        });
    })
    .map(payload => new AvailabilityActions.SetLowFareData(payload && payload['data']))
    .do(() => this.router.navigateByUrl('/booking-home/booking-path/trip-list'));

  @Effect()
  search$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.Search>(AvailabilityActions.SEARCH)
    .withLatestFrom(this.store)
    .mergeMap(([action, state]) => {
      this.store.dispatch(new AppActions.ClearErrors());
      return this.api.searchAvailability(
        state.availability.origin,
        state.availability.destination,
        state.availability.beginDate
      )
        .catch(error => {
          this.store.dispatch(new AppActions.AddError(error));
          return Observable.of(null);
        });
    })
    .map(payload => new AvailabilityActions.SetData(payload && payload['data']))
    .do(() => this.router.navigateByUrl('/booking-home/booking-path/trip-list'));

  @Effect()
  clearData$: Observable<Action> = this.actions
    .ofType(
    AvailabilityActions.SET_ORIGIN,
    AvailabilityActions.SET_DESTINATION,
    AvailabilityActions.SET_BEGIN_DATE,
    AvailabilityActions.SEARCH
    )
    .mergeMap(() => Observable.from([
      new AvailabilityActions.SetData(null),
      new BookingActions.SetData(null)
    ]));

  @Effect()
  sellTrip$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.SellTrip>(AvailabilityActions.SELL_TRIP)
    .mergeMap(action => {
      this.store.dispatch(new AppActions.ClearErrors());
      return this.api.sellTrip(
        action.payload.journeyKey,
        action.payload.fareKey
      )
        .catch(error => {
          this.store.dispatch(new AppActions.AddError(error));
          return Observable.empty();
        });
    })
    .map(payload => new BookingActions.SetData(payload && payload['data']))
    .do(() => this.router.navigateByUrl('/booking-home/booking-path/passenger'));
}
