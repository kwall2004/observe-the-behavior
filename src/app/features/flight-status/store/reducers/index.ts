import { State, reducer } from './flight-status.reducer';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export type FlightStatus = State;

export interface FlightStatusState {
	flightStatus: State;
}

export const reducers: ActionReducerMap<FlightStatusState> = {
	flightStatus: reducer
};

export const flightStatusFeatureState = createFeatureSelector<FlightStatusState>('flightStatus');
