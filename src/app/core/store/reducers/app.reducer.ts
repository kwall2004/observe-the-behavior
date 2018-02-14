import * as fromApp from '../actions/app.action';

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

export function reducer(state = initialState, action: fromApp.AppAction): State {
	switch (action.type) {
		case fromApp.APP_START:
			return state;

		case fromApp.SET_LOADING:
			return {
				...state,
				loading: action.payload ? state.loading + 1 : state.loading - 1
			};

		case fromApp.ADD_ERROR:
			return {
				...state,
				errors: state.errors.concat(action.payload)
			};

		case fromApp.CLEAR_ERRORS:
			return {
				...state,
				errors: []
			};

		case fromApp.SET_TOKEN_DATA:
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
