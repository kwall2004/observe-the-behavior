import { HomeActionTypes, HomeAction } from '../actions/home.action';
import { FlightStatusRequest, RetrieveBookingRequest } from '../../models';

export interface State {
	activeTab: number;
	flightStatusRequest: FlightStatusRequest;
	retrieveBookingRequest: RetrieveBookingRequest;
}

const initialState: State = {
	activeTab: 0,
	flightStatusRequest: null,
	retrieveBookingRequest: null
};

export function reducer(state = initialState, action: HomeAction): State {
	switch (action.type) {
		case HomeActionTypes.SET_TAB: {
			return {
				...state,
				activeTab: action.payload
			};
		}
		case HomeActionTypes.CHECK_STATUS: {
			return {
				...state,
				flightStatusRequest: action.payload
			};
		}
		case HomeActionTypes.RETRIEVE_BOOKING: {
			return {
				...state,
				retrieveBookingRequest: action.payload
			};
		}

		default: {
			return state;
		}
	}
}
