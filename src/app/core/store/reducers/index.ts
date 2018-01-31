import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromApp from './app.reducer';
import * as fromBooking from './booking.reducer';
import * as fromAvailability from './availability.reducer';

export interface CoreState {
    app: fromApp.State;
    booking: fromBooking.State;
    availability: fromAvailability.State;
}

export const reducers: ActionReducerMap<CoreState> = {
    app: fromApp.reducer,
    booking: fromBooking.reducer,
    availability: fromAvailability.reducer
};

export const getCoreState = createFeatureSelector<CoreState>(
  'core'
);
