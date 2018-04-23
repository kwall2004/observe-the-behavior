import { createSelector } from '@ngrx/store';
import { authFeatureState } from '../reducers';
import { State } from '../reducers/auth.reducer';


export const authTokenDataState = createSelector(
	authFeatureState,
	(state: State) => state.tokenData
);

export const authLoggedInState = createSelector(
	authFeatureState,
	(state: State) => state.loggedIn
);

export const authErrorsState = createSelector(
	authFeatureState,
	(state: State) => state.errors
);

