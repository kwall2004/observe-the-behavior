import { createSelector } from '@ngrx/store';
import { getBookingState, getCoreState } from '../reducers/index';

export const booking = createSelector(
	getBookingState,
	(state) => state.data
);
