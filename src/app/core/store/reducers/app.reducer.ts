import { AppActionTypes, AppAction } from '../actions/app.action';

export interface State {
	errors: any[];
	loading: number;
}

export const INITIAL_STATE: State = {
	errors: [],
	loading: 0
};

export function reducer(state = INITIAL_STATE, action: AppAction): State {
	switch (action.type) {
		case AppActionTypes.SET_LOADING:
			return {
				...state,
				loading: action.payload ? state.loading + 1 : state.loading - 1
			};

		case AppActionTypes.ADD_ERROR:
			return {
				...state,
				errors: state.errors.concat(action.payload)
			};

		case AppActionTypes.CLEAR_ERRORS:
			return {
				...state,
				errors: []
			};
	}
	return state;
}
