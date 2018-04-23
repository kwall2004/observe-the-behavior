import { createSelector } from '@ngrx/store';
import { homeFeatureState } from '../reducers';

export const homeActiveTabIndexState = createSelector(
	homeFeatureState,
	(state) => state.activeTabIndex
);

export const homeFlightStatusRequestState = createSelector(
	homeFeatureState,
	(state) => ({
		flightNumber: state.flightStatusSearchInput.flightNumber,
		departureStation: state.flightStatusSearchInput.departureStation,
		arrivalStation: state.flightStatusSearchInput.arrivalStation,
		departureDate: state.flightStatusSearchInput.departureDate
	})
);

export const homeFlightStatusSearchInputState = createSelector(
	homeFeatureState,
	(state) => state.flightStatusSearchInput
);
