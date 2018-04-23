import { createSelector } from '@ngrx/store';
import { shoppingCartFeatureState } from '../reducers/index';

export const shoppingCartVisitedPagesState = createSelector(
	shoppingCartFeatureState,
	(state) => state.visitedPages
);
