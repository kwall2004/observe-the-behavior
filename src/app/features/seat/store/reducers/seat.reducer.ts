import { SeatsActionTypes, SeatsAction } from '../actions/seat.action';

export interface State {
	seatMap: any;
}

const initialState: State = {
	seatMap: null
};

export function reducer(state = initialState, action: SeatsAction): State {
	switch (action.type) {
		case SeatsActionTypes.ASSIGN_SEATS: {
			return {
				...state
			};
		}

		default: {
			return state;
		}
	}
}
