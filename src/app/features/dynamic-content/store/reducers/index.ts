import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromDynamicContent from './dynamic-content.reducer';

export interface DynamicContentState {
	dynamicContent: fromDynamicContent.State;
}

export const reducers: ActionReducerMap<DynamicContentState> = {
	dynamicContent: fromDynamicContent.reducer
};

export const getDynamicContentState = createFeatureSelector<DynamicContentState>(
	'dyanmicContent'
);
