import { createSelector } from '@ngrx/store';
import { availabilityFeatureState } from '../reducers';

export const availabilitySearchInputState = createSelector(
	availabilityFeatureState,
	(state) => state.searchInput
);
