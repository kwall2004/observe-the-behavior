import * as fromFlightStatus from '../actions/flight-status.action';
import { FlightStatusRequest } from '@app/features/flight-status/models/flight-status-request';
import { toPayload } from '@ngrx/effects';

export interface State {
	loading: boolean;
	request: FlightStatusRequest;
}

const initialState: State = {
	loading: false,
	request: null
};

export function reducer(state = initialState, action: fromFlightStatus.FlightStatusActions): State {
	switch (action.type) {
		case fromFlightStatus.GET_FLIGHT_STATUS: {
			return {
				loading: true,
				request: action.payload
			};
		}

		default: {
			return state;
		}
	}
}
