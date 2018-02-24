import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { State, reducer } from './home.reducer';

export interface HomeState {
	home: State;
}

export const reducers: ActionReducerMap<HomeState> = {
	home: reducer
};

export const getHomeState = createFeatureSelector<HomeState>('home');

// TODO figure out why we need the null check for the unit test to work
export const getActiveTab = createSelector(
	getHomeState,
	(state: HomeState) => state.home && state.home.activeTab
);

