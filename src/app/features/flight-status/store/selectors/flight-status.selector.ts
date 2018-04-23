import { createSelector } from '@ngrx/store';
import { flightStatusFeatureState } from '../../store/reducers';

export const flightStatusState = createSelector(
	flightStatusFeatureState,
	(state) => state.flightStatus
);
