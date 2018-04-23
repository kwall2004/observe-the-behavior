import { HomeActionTypes, HomeAction } from '../actions';
import { FlightStatusSearchInputModel, RetrieveBookingRequestModel } from '../../models';

export interface State {
	activeTabIndex: number;
	flightStatusSearchInput: FlightStatusSearchInputModel;
	retrieveBookingRequest: RetrieveBookingRequestModel;
}

const initialState: State = {
	activeTabIndex: 0,
	flightStatusSearchInput: null,
	retrieveBookingRequest: null
};

export function reducer(state = initialState, action: HomeAction): State {
	switch (action.type) {
		case HomeActionTypes.SET_TAB: {
			return {
				...state,
				activeTabIndex: action.payload
			};
		}
		case HomeActionTypes.CHECK_STATUS: {
			return {
				...state,
				flightStatusSearchInput: action.payload
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
