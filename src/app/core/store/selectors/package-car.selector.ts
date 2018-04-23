import { createSelector } from '@ngrx/store';
import { packageCarFeatureState } from '../reducers';

export const packageCarSearchResultsState = createSelector(
	packageCarFeatureState,
	(state) => state.searchResults
);
