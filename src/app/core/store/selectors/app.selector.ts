import { createSelector } from '@ngrx/store';
import { getAppState } from '../reducers/index';

export const appLoading = createSelector(
	getAppState,
	(state) => state.loading
);

export const appErrors = createSelector(
	getAppState,
	(state) => state.errors
);

export const appTokenData = createSelector(
	getAppState,
	(state) => state.tokenData
);
