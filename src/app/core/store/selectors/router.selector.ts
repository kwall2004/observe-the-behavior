import { createSelector } from '@ngrx/store';
import { routerFeatureState } from '../../../core/store/reducers/router.reducer';


export const currentUrlState = createSelector(
	routerFeatureState,
	(state) => state && state.state && state.state.url
);

export const queryParamsState = createSelector(
	routerFeatureState,
	(state) => state && state.state && state.state.queryParams
);

export const currentFlowState = createSelector(
	currentUrlState,
	(state) => {
		if (state) {
			if (state.includes('/book/')) { return 'book'; }
			if (state.includes('/my-trips/')) { return 'my-trips'; }
			if (state.includes('/check-in/')) { return 'check-in'; }
		}
	}
);
