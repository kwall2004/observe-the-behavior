import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';

import * as fromRoot from '../reducers';
import * as AppActions from '../app/actions';
import * as BookingActions from './actions';
import { NavitaireApiService } from '../../services/navitaire-api.service';

@Injectable()
export class BookingEffects {
  constructor(
    private api: NavitaireApiService,
    private actions: Actions,
    private router: Router,
    private store: Store<fromRoot.State>
  ) { }

  @Effect()
  savePassenger$: Observable<Action> = this.actions
    .ofType<BookingActions.SavePassenger>(BookingActions.SAVE_PASSENGER)
    .withLatestFrom(this.store)
    .mergeMap(([action, state]) => {
      const passengerKey = Object.keys(state.booking.data['passengers'])[0];

      return this.api.savePassenger(
        passengerKey,
        action.payload.firstName,
        action.payload.lastName
      )
        .catch(() => Observable.empty());
    })
    .map(() => new BookingActions.GetData())
    .do(() => this.router.navigateByUrl('/booking-home/booking-path/confirmation'));

  @Effect()
  addPrimaryContact$: Observable<Action> = this.actions
    .ofType<BookingActions.SavePrimaryContact>(BookingActions.SAVE_PRIMARY_CONTACT)
    .withLatestFrom(this.store)
    .mergeMap(([action, state]) => {
      const contactKey = Object.keys(state.booking.data['contacts'])[0];

      if (contactKey === 'placeholder') {
        return this.api.addPrimaryContact(
          action.payload.firstName,
          action.payload.lastName,
          action.payload.phoneNumber
        )
          .catch(() => Observable.empty());
      } else {
        return this.api.savePrimaryContact(
          action.payload.firstName,
          action.payload.lastName,
          action.payload.phoneNumber
        )
          .catch(() => Observable.empty());
      }
    })
    .map(() => new BookingActions.GetData())
    .do(() => this.router.navigateByUrl('/booking-home/booking-path/confirmation'));

  @Effect()
  getData$: Observable<Action> = this.actions
    .ofType<BookingActions.GetData>(BookingActions.GET_DATA)
    .mergeMap(action => {
      this.store.dispatch(new AppActions.ClearErrors());
      return this.api.getBooking()
        .catch(error => {
          this.store.dispatch(new AppActions.AddError(error));
          return Observable.of(null);
        });
    })
    .map(payload => new BookingActions.SetData(payload && payload['data']));

  @Effect()
  commit$: Observable<Action> = this.actions
    .ofType<BookingActions.Commit>(BookingActions.COMMIT)
    .mergeMap(action => {
      this.store.dispatch(new AppActions.ClearErrors());
      return this.api.commitBooking()
        .catch(error => {
          this.store.dispatch(new AppActions.AddError(error));
          return Observable.empty();
        });
    })
    .map(() => new BookingActions.GetData());
}
