import { createSelector } from '@ngrx/store';
import { passengerFeatureState } from '../reducers/index';

export const passengerSsrSelection = createSelector(
	passengerFeatureState,
	(state) => state.ssrSelections
);
