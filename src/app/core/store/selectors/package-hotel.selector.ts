import { createSelector } from '@ngrx/store';
import { packageHotelFeatureState } from '../reducers';

export const packageHotelSearchResultsState = createSelector(
	packageHotelFeatureState,
	(state) => state.searchResults
);
