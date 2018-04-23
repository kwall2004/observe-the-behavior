import { createSelector } from '@ngrx/store';
import { userFeatureState } from '../reducers';

export const userState = createSelector(
	userFeatureState,
	(state) => state.user
);

export const userFullNameState = createSelector(
	userState,
	(state) => state && `${state.name.first} ${state.name.last}`
);

export const userStoredPaymentState = createSelector(
	userState,
	(state) => state.storedPayments.filter((x) => x.default === true)
);

// todo - hardcoded mock for now until loyalty tier 2 is implemented
export const userIsClub = createSelector(
	userState,
	() => false
);
