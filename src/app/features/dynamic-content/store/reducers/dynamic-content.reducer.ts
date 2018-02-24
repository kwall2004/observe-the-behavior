import { DynamicContentActionTypes, DynamicContentAction } from '../actions/dynamic-content.action';

export interface State {
	data: any;
}

const initialState: State = {
	data: null
};

export function reducer(state = initialState, action: DynamicContentAction): State {
	switch (action.type) {
		case DynamicContentActionTypes.SET_CONTENT:
			return {
				...state,
				data: action.payload
			};

		default:
			return state;
	}
}
