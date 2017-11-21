import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

import * as AvailabilityActions from './actions';
import * as BookingActions from '../booking/actions';
import { ApiService } from '../../services/api.service';

@Injectable()
export class AvailabilityEffects {
  constructor(
    private api: ApiService,
    private actions: Actions,
    private router: Router
  ) { }

  @Effect()
  availibilitySearchSimple$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.Search>(AvailabilityActions.SEARCH)
    .mergeMap(action => this.api.availabilitySearchSimple(action.payload.startDate)
      .map(data => new AvailabilityActions.SearchSuccess(data))
      .catch(error => of(new AvailabilityActions.SearchFailure(error)))
    );

  @Effect()
  sellTrip$: Observable<Action> = this.actions
    .ofType<AvailabilityActions.SellTrip>(AvailabilityActions.SELL_TRIP)
    .mergeMap(action => this.api.sellTrip(action.payload.journey)
      .map(data => new BookingActions.SellTripSuccess(data))
      .do(() => this.router.navigateByUrl('/contact'))
      .catch(error => of(new BookingActions.SellTripFailure(error)))
    );
}
