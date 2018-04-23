import { AvailabilityActionTypes, AvailabilityAction } from '../actions/availability.action';
import * as moment from 'moment';

import { AvailabilitySearchModel } from '../../models';

export interface State {
	searchInput: AvailabilitySearchModel;
}

const departureDate = new Date();

export const INITIAL_STATE: State = {
	searchInput: {
		flightType: 'roundTrip',
		packageType: 'flightCar',
		criteria: {
			originStationCode: null,
			destinationStationCode: null,
			dates: [
				departureDate,
				moment(departureDate).add(3, 'days').toDate()
			],
			adultCount: 2,
			childCount: 0,
			promoCode: null
		},
		driverAge: 0,
		hotelRooms: 0
	}
};

export function reducer(state = INITIAL_STATE, action: AvailabilityAction): State {
	switch (action.type) {
		case AvailabilityActionTypes.INIT_SEARCH_INPUT:
		case AvailabilityActionTypes.SET_SEARCH_INPUT:
			return {
				...state,
				searchInput: action.payload
			};
	}

	return state;
}
