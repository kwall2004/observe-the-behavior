import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as AppActions from './actions';
import * as AvailabilityActions from '../availability/actions';
import * as BookingActions from '../booking/actions';
import { ApiService } from '../../services/api.service';

@Injectable()
export class AppEffects {
  constructor(
    private api: ApiService,
    private actions: Actions,
    private router: Router
  ) { }

  @Effect()
  getToken$: Observable<Action> = this.actions
    .ofType<AppActions.GetToken>(AppActions.GET_TOKEN)
    .mergeMap(action => this.api.getToken())
    .do(payload => localStorage.setItem('token', payload['data']['token']))
    .mergeMap(payload => from([
      new AppActions.SetToken(payload['data']['token']),
      new AvailabilityActions.GetCities()
    ]))
    .do(() => this.router.navigateByUrl('/availability'));

  @Effect()
  deleteToken$: Observable<Action> = this.actions
    .ofType<AppActions.DeleteToken>(AppActions.DELETE_TOKEN)
    .mergeMap(action => this.api.deleteToken())
    .do(() => localStorage.removeItem('token'))
    .mergeMap(() => from([
      new BookingActions.SetData(null),
      new AvailabilityActions.SetCities(null),
      new AvailabilityActions.SetData(null),
      new AppActions.SetToken(null)
    ]));
}
