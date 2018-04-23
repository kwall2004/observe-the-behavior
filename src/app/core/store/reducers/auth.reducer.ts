import { AuthActionTypes, AuthAction } from '../actions/auth.action';

export interface State {
	tokenData: any;
	loggedIn: boolean;
	errors: any[];
}

const initialState: State = {
	tokenData: {
		token: null,
		idleTimeoutInMinutes: 0,
		apoRandomNumber: 0
	},
	loggedIn: false,
	errors: []
};

export function reducer(state = initialState, action: AuthAction): State {
	switch (action.type) {
		case AuthActionTypes.INIT_TOKEN_DATA:
		case AuthActionTypes.SET_TOKEN_DATA:
			return {
				...state,
				tokenData: {
					...action.payload
				}
			};

		case AuthActionTypes.LOGIN:
			return {
				...state,
				errors: []
			};

		case AuthActionTypes.LOGIN_SUCCESS:
			return {
				...state,
				loggedIn: true
			};

		case AuthActionTypes.LOGIN_FAIL:
			return {
				...state,
				errors: state.errors.concat(action.payload)
			};
	}

	return state;
}
