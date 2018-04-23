import { createSelector } from '@ngrx/store';
import { flightFeatureState } from '../reducers';

export const flightSearchResultsState = createSelector(
	flightFeatureState,
	(state) => state.searchResults
);

export const flightLowFareSearchResultsState = createSelector(
	flightFeatureState,
	(state) => state.lowFareSearchResults
);
