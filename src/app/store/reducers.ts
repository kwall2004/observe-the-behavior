import { ActionReducerMap } from '@ngrx/store';

import { RouterStateUrl } from '../store/utils';

import * as fromRouter from '@ngrx/router-store';
import * as fromApp from './app/reducer';
import * as fromAvailability from './availability/reducer';
import * as fromBooking from './booking/reducer';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>,
  app: fromApp.State,
  availability: fromAvailability.State,
  booking: fromBooking.State
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  app: fromApp.reducer,
  availability: fromAvailability.reducer,
  booking: fromBooking.reducer
}