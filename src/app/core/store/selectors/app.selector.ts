import { createSelector } from '@ngrx/store';
import { appFeatureState } from '../reducers/index';

export const appLoadingState = createSelector(
	appFeatureState,
	(state) => state.loading
);

export const appErrorsState = createSelector(
	appFeatureState,
	(state) => state.errors
);
