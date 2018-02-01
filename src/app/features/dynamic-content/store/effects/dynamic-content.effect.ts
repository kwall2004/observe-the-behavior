import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as DynamicContentActions from '../actions/dynamic-content.action';
import { DynamicContentApiService } from '../../services/dynamic-content-api.service';

@Injectable()
export class DynamicContentEffects {
  constructor(
    private api: DynamicContentApiService,
    private actions: Actions
  ) { }

  @Effect()
  getContent$: Observable<Action> = this.actions
    .ofType(DynamicContentActions.GET_CONTENT)
    .mergeMap(action => this.api.getContent())
    .map(payload => new DynamicContentActions.SetContent(payload));
}
