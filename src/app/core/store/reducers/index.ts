import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouterStore from '@ngrx/router-store';

import * as fromApp from './app.reducer';
import * as fromRouter from './router.reducer';
import * as fromBooking from './booking.reducer';
import * as fromAvailability from './availability.reducer';

export interface CoreState {
	app: fromApp.State;
	router: fromRouterStore.RouterReducerState<fromRouter.RouterStateUrl>;
	booking: fromBooking.State;
	availability: fromAvailability.State;
}

export const reducers: ActionReducerMap<CoreState> = {
	app: fromApp.reducer,
	router: fromRouterStore.routerReducer,
	booking: fromBooking.reducer,
	availability: fromAvailability.reducer
};

export const getCoreState = createFeatureSelector<CoreState>(
	'core'
);
