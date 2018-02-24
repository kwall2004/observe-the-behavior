import { createSelector } from '@ngrx/store';
import { getAvailabilityState } from '../reducers/index';

export const availabilityStations = createSelector(
	getAvailabilityState,
	(state) => state.stations
);

export const availabilitySearchCriteria = createSelector(
	getAvailabilityState,
	(state) => state.searchCriteria
);

export const availabilityLowFareSearchCriteria = createSelector(
	getAvailabilityState,
	(state) => state.lowFareSearchCriteria
);

export const availability = createSelector(
	getAvailabilityState,
	(state) => state.data
);

export const availabilityLowFare = createSelector(
	getAvailabilityState,
	(state) => state.lowFareData
);
