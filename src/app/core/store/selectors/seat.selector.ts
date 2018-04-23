import { createSelector } from '@ngrx/store';
import { seatsFeatureState } from '../reducers/index';

export const seatsSeatMapsState = createSelector(
	seatsFeatureState,
	(state) => state.seatMaps
);

export const seatsActivePassengerKeyState = createSelector(
	seatsFeatureState,
	(state) => state.activePassengerKey
);

export const seatsActiveSegmentKeyState = createSelector(
	seatsFeatureState,
	(state) => state.activeSegmentKey
);

export const seatsSelectionState = createSelector(
	seatsFeatureState,
	(state) => state.selection
);

export const seatsTotalState = createSelector(
	seatsSelectionState,
	(state) => {
		let result = 0;
		for (const segmentKey in state) {
			if (state.hasOwnProperty(segmentKey)) {
				const segment = state[segmentKey];
				for (const passengerKey in segment) {
					if (segment.hasOwnProperty(passengerKey)) {
						const passengerSeatSelection = segment[passengerKey];
						if (passengerSeatSelection.price) {
							result += passengerSeatSelection.price;
						}
					}
				}
			}
		}
		return result;
	}
);

export const seatsSegmentTotalsState = createSelector(
	seatsSelectionState,
	(state) => {
		const result = {};
		for (const segmentKey in state) {
			if (state.hasOwnProperty(segmentKey)) {
				const segment = state[segmentKey];
				result[segmentKey] = result[segmentKey] || { total: 0 };
				for (const passengerKey in segment) {
					if (segment.hasOwnProperty(passengerKey)) {
						const passengerSeatSelection = segment[passengerKey];
						if (passengerSeatSelection.price) {
							result[segmentKey].total += passengerSeatSelection.price;
						}
					}
				}
			}
		}
		return result;
	}
);
