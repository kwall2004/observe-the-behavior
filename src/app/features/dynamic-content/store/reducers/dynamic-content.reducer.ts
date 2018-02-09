import * as fromDynamicContentActions from '../actions/dynamic-content.action';

export interface State {
	data: any;
}

const initialState: State = {
	data: null
};

export function reducer(state = initialState, action: fromDynamicContentActions.DynamicContentAction): State {
	switch (action.type) {
		case fromDynamicContentActions.SET_CONTENT:
			return {
				...state,
				data: action.payload
			};

		default:
			return state;
	}
}
