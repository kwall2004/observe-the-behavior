import { CultureActionTypes, CultureAction } from '../actions/culture.action';

export interface State {
	culture: string;
}

export const INITIAL_STATE: State = {
	culture: null
};

export function reducer(state: State = INITIAL_STATE, action: CultureAction): State {
	switch (action.type) {
		case CultureActionTypes.UPDATE_CULTURE:
			return {
				...state,
				culture: action.payload.cultureCode
			};
	}
	return state;
}
