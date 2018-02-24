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
			const newCulture = action.payload.cultureCode;
			return { culture: newCulture };
	}
	return state;
}

export const getCultureCode = (state: State) => state.culture;
