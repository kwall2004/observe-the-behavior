import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { State, reducer } from './optional-services.reducer';

export interface OptionalServicesState {
	optionalServices: State;
}

export const reducers: ActionReducerMap<OptionalServicesState> = {
	optionalServices: reducer
};

export const getOptionalServicesState = createFeatureSelector<OptionalServicesState>('optionalServices');

