import { createSelector } from '@ngrx/store';
import { optionsFeatureState } from '../reducers';

export const extrasInputState = createSelector(
	optionsFeatureState,
	(state) => ({
		flexSelected: state.optionsInput.flexSelected,
		shortcutSecuritySelection: state.optionsInput.shortCutSecuritySelection,
		shortcutBoardingSelected: state.optionsInput.shortCutBoardingSelected,
		checkInSelection: state.optionsInput.checkInSelection
	})
);
