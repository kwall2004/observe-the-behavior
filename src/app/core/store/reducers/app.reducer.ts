import { AppActionTypes, AppAction } from '../actions/app.action';

export interface State {
	errors: any[];
	loading: number;
	tokenData: any;
}

const initialState: State = {
	errors: [],
	loading: 0,
	tokenData: {
		token: localStorage.getItem('token'),
		idleTimeoutInMinutes: localStorage.getItem('idleTimeoutInMinutes')
	}
};

export function reducer(state = initialState, action: AppAction): State {
	switch (action.type) {
		case AppActionTypes.APP_START:
			return state;

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

		case AppActionTypes.SET_TOKEN_DATA:
			if (action.payload && action.payload.token) {
				localStorage.setItem('token', action.payload && action.payload.token);
			} else {
				localStorage.removeItem('token');
			}

			if (action.payload && action.payload.idleTimeoutInMinutes) {
				localStorage.setItem('idleTimeoutInMinutes', action.payload && action.payload.idleTimeoutInMinutes);
			} else {
				localStorage.removeItem('idleTimeoutInMinutes');
			}

			return {
				...state,
				tokenData: {
					...action.payload
				}
			};
	}
	return state;
}
