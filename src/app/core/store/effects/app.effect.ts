import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

import * as fromRoot from '../reducers';
import * as AppActions from '../actions/app.action';
import * as AvailabilityActions from '../actions/availability.action';
import * as BookingActions from '../actions/booking.action';
import { NavitaireApiService } from '../../services/navitaire-api.service';

@Injectable()
export class AppEffects {
  constructor(
    private api: NavitaireApiService,
    private actions: Actions,
    private router: Router,
    private store: Store<fromRoot.CoreState>
  ) { }

  @Effect()
  getToken$: Observable<Action> = this.actions
    .ofType<AppActions.GetToken>(AppActions.GET_TOKEN)
    .mergeMap(action => {
      this.store.dispatch(new AppActions.ClearErrors());
      return this.api.getToken()
        .catch(error => {
          this.store.dispatch(new AppActions.AddError(error));
          return Observable.of(null);
        });
    })
    .map(payload => new AppActions.SetToken(payload && payload['data']['token']));

  @Effect()
  setToken$: Observable<Action> = this.actions
    .ofType<AppActions.SetToken>(AppActions.SET_TOKEN)
    .mergeMap(() => Observable.from([
      new AvailabilityActions.SetLowFareData(null),
      new AvailabilityActions.SetAvailabilityData(null),
      new BookingActions.SetData(null)
    ]))
    .do(() => this.router.navigateByUrl('/home'));
}
