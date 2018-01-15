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
      return this.api.getToken()
        .catch(error => {
          this.store.dispatch(new AppActions.AddError(error));
          return Observable.of(null);
        });
    })
    .map(payload => {
      localStorage.setItem('token', payload && payload['data']['token']);
      return new AppActions.SetToken(payload && payload['data']['token']);
    });

  @Effect()
  clearData$: Observable<Action> = this.actions
    .ofType(AppActions.GET_TOKEN)
    .mergeMap(() => Observable.from([
      new AvailabilityActions.SetLowFareData(null),
      new AvailabilityActions.SetData(null),
      new BookingActions.SetData(null)
    ]));
}
