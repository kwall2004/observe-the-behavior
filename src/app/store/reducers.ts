import { ActionReducerMap } from '@ngrx/store';

import * as fromApp from './app/reducer';
import * as fromAvailability from './availability/reducer';

export interface State {
  app: fromApp.State,
  availability: fromAvailability.State;
}

export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer,
  availability: fromAvailability.reducer
}