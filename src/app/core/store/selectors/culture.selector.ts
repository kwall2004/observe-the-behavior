import { createSelector } from '@ngrx/store';
import { cultureFeatureState } from '../reducers/index';

export const currentCultureState = createSelector(
	cultureFeatureState,
	(state) => state.culture
);
