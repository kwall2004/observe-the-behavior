import { UserActionTypes, UserAction } from '../actions/user.action';

export interface State {
	user: any;
}

const initialState: State = {
	user: null
};

export function reducer(state = initialState, action: UserAction): State {
	switch (action.type) {
		case UserActionTypes.SET_USER:
			return {
				...state,
				user: action.payload
			};
	}

	return state;
}
