import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/mergeMap';

import * as AvailabilityActions from './availability.action';
import { ApiService } from '../../services/api.service';

@Injectable()
export class AvailabilityEffects {
  constructor(
    private api: ApiService,
    private actions: Actions
  ) { }

  @Effect()
  token$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.GetToken>(AvailabilityActions.GET_TOKEN)
    .mergeMap(action => this.api.token());

  @Effect()
  availibilitySearchSimple$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.GetFlights>(AvailabilityActions.GET_FLIGHTS)
    .mergeMap(action => this.api.availabilitySearchSimple(action.payload.startDate))
    .catch((error) => of(new AvailabilityActions.GetFlightsError(error)));

  @Effect()
  sellTrip$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.SellTrip>(AvailabilityActions.SELL_TRIP)
    .mergeMap(action => this.api.sellTrip(action.payload.journey));
}
