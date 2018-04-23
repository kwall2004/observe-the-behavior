import { PassengerActionTypes, PassengerAction } from '../actions/passenger.action';

export interface State {
	ssrSelections: any[];
}

const initialState = {
	ssrSelections: [],
};

export function reducer(state = initialState, action: PassengerAction): State {

	switch (action.type) {

		case PassengerActionTypes.SET_PASSENGER_SSR:
			return {
				...state,
				ssrSelections: action.payload
			};
	}
	return state;
}
