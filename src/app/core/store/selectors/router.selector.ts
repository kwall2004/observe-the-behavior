import { createSelector } from '@ngrx/store';
import { getRouterState } from '../../../core/store/reducers/router.reducer';


export const currentUrl = createSelector(
	getRouterState,
	(state) => state && state.state && state.state.url
);

export const queryParams = createSelector(
	getRouterState,
	(state) => state && state.state && state.state.queryParams
);

export const currentFlow = createSelector(
	currentUrl,
	(state) => {
		if (state) {
			if (state.includes('/book/')) { return 'book'; }
			if (state.includes('/my-trips/')) { return 'my-trips'; }
			if (state.includes('/check-in/')) { return 'check-in'; }
		}
	}
);
