import { OptionActionTypes, OptionAction } from '../actions';

import { OptionsInputModel } from '../../models';

export interface State {
	optionsInput: OptionsInputModel;
}

export const INITIAL_STATE: State = {
	optionsInput: {
		flexSelected: false,
		shortCutSecuritySelection: null,
		shortCutBoardingSelected: false,
		checkInSelection: null
	}
};

export function reducer(state = INITIAL_STATE, action: OptionAction): State {

	switch (action.type) {
		case OptionActionTypes.SET_FLEX:
			return {
				...state,
				optionsInput: {
					...state.optionsInput,
					flexSelected: action.payload
				}
			};

		case OptionActionTypes.SET_SHORTCUT_SECURITY:
			return {
				...state,
				optionsInput: {
					...state.optionsInput,
					shortCutSecuritySelection: action.payload
				}
			};

		case OptionActionTypes.SET_SHORTCUT_BOARDING:
			return {
				...state,
				optionsInput: {
					...state.optionsInput,
					shortCutBoardingSelected: action.payload
				}
			};

		case OptionActionTypes.SET_CHECK_IN:
			return {
				...state,
				optionsInput: {
					...state.optionsInput,
					checkInSelection: action.payload
				}
			};
	}

	return state;
}
