import { ActionReducerMap } from '@ngrx/store';

import * as fromAvailability from './availability/reducer';

export interface State {
  availability: fromAvailability.State;
}

export const reducers: ActionReducerMap<State> = {
  availability: fromAvailability.reducer
}