import { Action } from '@ngrx/store';

import * as fromCulture from '../actions/culture.action';

export interface State {
	culture: string;
}

export const INITIAL_STATE: State = {
	culture: null
};

export function reducer(state: State = INITIAL_STATE, action: fromCulture.Actions): State {
	switch (action.type) {
		case fromCulture.UPDATE_CULTURE:
			const newCulture = action.payload.cultureCode;
			return { culture: newCulture };
	}
	return state;
}

export const getCultureCode = (state: State) => state.culture;
