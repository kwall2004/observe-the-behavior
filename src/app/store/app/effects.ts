import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/mergeMap';

import * as AppActions from './actions';
import { ApiService } from '../../services/api.service';

@Injectable()
export class AppEffects {
  constructor(
    private api: ApiService,
    private actions: Actions
  ) { }

  @Effect()
  token$: Observable<Action> = this.actions
    .ofType<AppActions.GetToken>(AppActions.GET_TOKEN)
    .mergeMap(action => this.api.token());
}
