import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { State, reducer } from './seat.reducer';

export interface SeatState {
	seat: State;
}

export const reducers: ActionReducerMap<SeatState> = {
	seat: reducer
};

export const getHomeState = createFeatureSelector<SeatState>('seat');


