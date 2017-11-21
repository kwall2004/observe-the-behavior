import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/mergeMap';

import * as BookingActions from './actions';
import { ApiService } from '../../services/api.service';

@Injectable()
export class BookingEffects {
  constructor(
    private actions: Actions
  ) { }
}
