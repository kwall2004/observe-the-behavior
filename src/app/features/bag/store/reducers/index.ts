import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { State, reducer } from './bag.reducer';

export interface BagState {
	bag: State;
}

export const reducers: ActionReducerMap<BagState> = {
	bag: reducer
};

export const getHomeState = createFeatureSelector<BagState>('bag');


