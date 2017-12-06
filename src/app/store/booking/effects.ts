import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/withLatestFrom';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/mergeMap';

import { State } from '../reducers';
import * as AppActions from '../app/actions';
import * as BookingActions from './actions';
import { ApiService } from '../../services/api.service';

@Injectable()
export class BookingEffects {
  constructor(
    private api: ApiService,
    private actions: Actions,
    private router: Router,
    private state: Store<State>
  ) { }

  @Effect()
  savePassenger$: Observable<Action> = this.actions
    .ofType<BookingActions.SavePassenger>(BookingActions.SAVE_PASSENGER)
    .withLatestFrom(this.state)
    .mergeMap(([action, state]) => this.api.savePassenger(
      Object.keys(state.booking.data['passengers'])[0],
      action.payload.firstName,
      action.payload.lastName
    )
      .map(() => new BookingActions.GetData())
    )
    .do(() => this.router.navigateByUrl('/booking'));

  @Effect()
  getData$: Observable<Action> = this.actions
    .ofType<BookingActions.GetData>(BookingActions.GET_DATA)
    .mergeMap(action => this.api.getBooking()
      .map(payload => new BookingActions.SetData(payload['data']))
    );

  @Effect()
  commit$: Observable<Action> = this.actions
    .ofType<BookingActions.Commit>(BookingActions.COMMIT)
    .mergeMap(action => this.api.commitBooking()
      .map(() => new BookingActions.GetData())
    );
}
