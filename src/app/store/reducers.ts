import { ActionReducerMap } from '@ngrx/store';

import * as fromRoot from './root/reducer';
import * as fromAvailability from './availability/reducer';

export interface State {
  root: fromRoot.State,
  availability: fromAvailability.State;
}

export const reducers: ActionReducerMap<State> = {
  root: fromRoot.reducer,
  availability: fromAvailability.reducer
}