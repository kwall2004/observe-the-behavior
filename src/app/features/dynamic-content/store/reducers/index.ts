import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { State, reducer } from './dynamic-content.reducer';

export interface DynamicContentState {
	dynamicContent: State;
}

export const reducers: ActionReducerMap<DynamicContentState> = {
	dynamicContent: reducer
};

export const getDynamicContentState = createFeatureSelector<DynamicContentState>(
	'dyanmicContent'
);
