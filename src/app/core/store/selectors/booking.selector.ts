import { createSelector } from '@ngrx/store';
import { bookingFeatureState } from '../reducers/index';

export const bookingState = createSelector(
	bookingFeatureState,
	(state) => state.data
);

export const bookingJourneyKeysState = createSelector(
	bookingState,
	(state) => state.journeys.map(journey => journey.journeyKey)
);

export const bookingSegmentsState = createSelector(
	bookingState,
	(state) => state && state.journeys.reduce((result, journey) => result.concat(journey.segments), [])
);

export const bookingPassengersState = createSelector(
	bookingState,
	(state) => state && Object.keys(state.passengers).reduce((result, passenger) => result.concat(state.passengers[passenger]), [])
);

export const bookingContactsState = createSelector(
	bookingState,
	(state) => state.contacts
);

export const bookingPrimaryContactState = createSelector(
	bookingContactsState,
	(state) => state.P
);

export const contactFullAddressStringState = createSelector(
	bookingPrimaryContactState,
	(state) => state.address.lineOne + ', ' + state.address.city + ', ' + state.address.countryCode + ', '
		+ state.address.postalCode
);
