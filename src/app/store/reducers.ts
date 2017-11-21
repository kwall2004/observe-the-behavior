import { ActionReducerMap } from '@ngrx/store';

import * as fromApp from './app/reducer';
import * as fromAvailability from './availability/reducer';
import * as fromBooking from './booking/reducer';

export interface State {
  app: fromApp.State,
  availability: fromAvailability.State,
  booking: fromBooking.State
}

export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer,
  availability: fromAvailability.reducer,
  booking: fromBooking.reducer
}