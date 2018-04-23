// flightstatusrequest is managed by home store

import { FlightStatusAction, FlightStatusActionType } from '../actions';

export interface State {
	responseReceived: boolean;
	responseHasError: boolean;
	flightStatusResponse: any;
	notificationSubscriptions: Object;
}

const initialState: State = {
	responseReceived: false,
	responseHasError: false,
	flightStatusResponse: null,
	notificationSubscriptions: {}
};

export function reducer(state = initialState, action: FlightStatusAction): State {
	switch (action.type) {
		case FlightStatusActionType.GET_FLIGHT_STATUS_SUCCESS: {
			return {
				...state,
				responseReceived: true,
				responseHasError: false,
				flightStatusResponse: (action.payload as any[])
					.reduce((prev, curr) => {
						const i = curr.journeyID - 1;
						let arr = (prev as any[][]);

						if (arr.length <= i) {
							arr = arr.concat(Array(i + 1 - arr.length));
							arr[i] = [];
						} else if (!arr[i]) {
							arr[i] = [];
						}

						return [
							...arr.slice(0, i),
							arr[i].concat([curr]),
							...arr.slice(i + 1)
						];
					}, []),
				notificationSubscriptions: {}
			};
		}

		case FlightStatusActionType.GET_FLIGHT_STATUS_ERROR: {
			return {
				...state,
				responseReceived: true,
				responseHasError: true,
				flightStatusResponse: null
			};
		}

		case FlightStatusActionType.POST_NOTIFICATION_SUBSCRIPTION_SUCCESS: {

			// todo: this can be improved -- waiting for feedback
			const subInfo = {};
			subInfo[action.payload] = true;

			return {
				...state,
				notificationSubscriptions: {
					...state.notificationSubscriptions,
					...subInfo
				}
			};
		}

		default: {
			return state;
		}
	}
}
