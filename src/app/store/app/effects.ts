import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as fromRoot from '../reducers';
import * as AppActions from './actions';
import * as AvailabilityActions from '../availability/actions';
import * as BookingActions from '../booking/actions';
import { NavitaireApiService } from '../../services/navitaire-api.service';

@Injectable()
export class AppEffects {
  constructor(
    private api: NavitaireApiService,
    private actions: Actions,
    private router: Router,
    private store: Store<fromRoot.State>
  ) { }

  @Effect()
  getToken$: Observable<Action> = this.actions
    .ofType<AppActions.GetToken>(AppActions.GET_TOKEN)
    .mergeMap(action => {
      this.store.dispatch(new AppActions.ClearErrors());
      return this.api.getToken();
    })
    .mergeMap(payload => {
      localStorage.setItem('token', payload['data']['token']);
      return Observable.from([
        new AppActions.SetToken(payload['data']['token']),
        new AvailabilityActions.GetStations()
      ]);
    })
    .do(() => this.router.navigateByUrl('/booking-home'));

  @Effect()
  deleteToken$: Observable<Action> = this.actions
    .ofType<AppActions.DeleteToken>(AppActions.DELETE_TOKEN)
    .mergeMap(action => this.api.deleteToken())
    .mergeMap(() => {
      localStorage.removeItem('token');
      return Observable.from([
        new BookingActions.SetData(null),
        new AvailabilityActions.SetCities(null),
        new AvailabilityActions.SetData(null),
        new AppActions.SetToken(null)
      ]);
    });
}
