import { createSelector } from '@ngrx/store';
import { ssrFeatureState } from '../reducers/index';
import { currentFlowState } from './router.selector';

export const ssrAvailabilityState = createSelector(
	ssrFeatureState,
	(state) => state && state.availableSsrs
);

// todo this needs to consider the flow path.
export const ssrsBagClubSsrsState = createSelector(
	currentFlowState,
	(flow) => {
		const ssrs = {
			'book': {
				carryOn: 'BAGM',
				checked1: 'BG1M',
				checked2: 'BG2M',
				checked3: 'BG3M',
				checked4: 'BG4M',
				checked5: 'BG5M',
			},
			'my-trips': {
				carryOn: 'BGCZ',
				checked1: 'BG1Z',
				checked2: 'BG2Z',
				checked3: 'BG3Z',
				checked4: 'BG4Z',
				checked5: 'BG5Z',
			},
			'check-in': {
				carryOn: 'BGWM',
				checked1: 'BW1M',
				checked2: 'BW2M',
				checked3: 'BW3M',
				checked4: 'BW4M',
				checked5: 'BW5M',
			}
		};
		return ssrs[flow];
	}
);

export const ssrsBagSsrsState = createSelector(
	currentFlowState,
	(flow) => {
		const ssrs = {
			'book': {
				carryOn: 'BAGC',
				checked1: 'BAG1',
				checked2: 'BAG2',
				checked3: 'BAG3',
				checked4: 'BAG4',
				checked5: 'BAG5',
			},
			'my-trips': {
				carryOn: 'BGZC',
				checked1: 'BGZ1',
				checked2: 'BGZ2',
				checked3: 'BGZ3',
				checked4: 'BGZ4',
				checked5: 'BGZ5',
			},
			'check-in': {
				carryOn: 'BGWC',
				checked1: 'BGW1',
				checked2: 'BGW2',
				checked3: 'BGW3',
				checked4: 'BGW4',
				checked5: 'BGW5',
			}
		};
		return ssrs[flow];
	}
);
