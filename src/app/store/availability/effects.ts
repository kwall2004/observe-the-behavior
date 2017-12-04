import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/withLatestFrom';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { State } from '../reducers';
import * as AppActions from '../app/actions';
import * as AvailabilityActions from './actions';
import * as BookingActions from '../booking/actions';
import { ApiService } from '../../services/api.service';

@Injectable()
export class AvailabilityEffects {
  constructor(
    private api: ApiService,
    private actions: Actions,
    private router: Router,
    private state$: Store<State>
  ) { }

  @Effect()
  getCities$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.GetCities>(AvailabilityActions.GET_CITIES)
    .mergeMap(action => this.api.getCities()
      .map(data => new AvailabilityActions.GetCitiesSuccess(data))
      .catch(error => of(new AppActions.AddError(error)))
    );

  @Effect()
  availibilitySearchSimple$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.Search>(AvailabilityActions.SEARCH)
    .withLatestFrom(this.state$)
    .mergeMap(([action, state]) => this.api.availabilitySearchSimple(
      state.availability.origin,
      state.availability.destination,
      state.availability.beginDate
    )
      .map(data => new AvailabilityActions.SearchSuccess(data))
      .catch(error => of(new AppActions.AddError(error)))
    );

  @Effect()
  sellTrip$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.SellTrip>(AvailabilityActions.SELL_TRIP)
    .mergeMap(action => this.api.sellTrip(action.payload.journey)
      .map(data => new BookingActions.SellTripSuccess(data))
      .do(() => this.router.navigateByUrl('/passenger-add'))
      .catch(error => of(new AppActions.AddError(error)))
    );
}
