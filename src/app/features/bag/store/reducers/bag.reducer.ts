import { BagsActionTypes, BagsAction } from '../actions/bag.action';

export interface State {
	pricing: any;
}

const initialState: State = {
	pricing: null
};

export function reducer(state = initialState, action: BagsAction): State {
	switch (action.type) {
		case BagsActionTypes.SAVE_BAGS: {
			return {
				...state
			};
		}

		default: {
			return state;
		}
	}
}
