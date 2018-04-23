import { BagsActionTypes, BagsAction } from '../actions/bag.action';
import { cloneDeep, countChecked, countCarryOn, countSportingAndOverWeight, calculateTotalCounts, isConsideredCheckedBag } from '../../../shared/utilities';
import { PassengerBagSelection } from '../../models/bag/passenger-bag-selection.model';
import { BagSelectionModel } from '../../models/bag/bag-selection.model';

export interface State {
	selected: BagSelectionModel;
}

const initialState: State = {
	selected: {}
};

export function reducer(state = initialState, action: BagsAction): State {
	switch (action.type) {
		// todo this shouldn't clear out selection after BOOKING_SET after bag selection.
		case BagsActionTypes.SET_SELECTION: {
			const updatedSelection: BagSelectionModel = {};
			if (action.payload) {
				action.payload.journeys.forEach(journey => {
					const journeyKey = journey.journeyKey;
					for (const passenger in journey.segments[0].passengerSegment) {
						const paxSsrs = journey.segments[0].passengerSegment[passenger].ssrs;
						const paxSelection = new PassengerBagSelection();
						if (paxSsrs.length) {
							countSportingAndOverWeight(paxSelection.paid, paxSsrs);
							paxSelection.paid.checked = countChecked(paxSsrs);
							paxSelection.paid.carryOn = countCarryOn(paxSsrs);
						}
						calculateTotalCounts(paxSelection);
						updatedSelection[journeyKey] = updatedSelection[journeyKey] || {};
						updatedSelection[journeyKey][passenger] = paxSelection;
					}
				});
			}
			return {
				...state,
				selected: updatedSelection
			};
		}
		case BagsActionTypes.ADD_BAG: {
			const { p, j, bagType, ssr } = action.payload;
			const updatedSelection: BagSelectionModel = cloneDeep(state.selected);

			updatedSelection[j][p].unpaid[bagType]++;
			updatedSelection[j][p][bagType + 'Total'] = (updatedSelection[j][p][bagType + 'Total']) + ssr.passengersAvailability[p].price;
			updatedSelection[j][p].ssrCodes.push(ssr.ssrCode);
			if (isConsideredCheckedBag(bagType)) {
				updatedSelection[j][p].checkedBagAllowed--;
			}
			return {
				...state,
				selected: updatedSelection
			};
		}

		case BagsActionTypes.SUBTRACT_BAG: {
			const { p, j, bagType, ssr } = action.payload;
			const updatedSelection: BagSelectionModel = cloneDeep(state.selected);

			updatedSelection[j][p].unpaid[bagType]--;
			updatedSelection[j][p][bagType + 'Total'] = (updatedSelection[j][p][bagType + 'Total']) - ssr.passengersAvailability[p].price;
			updatedSelection[j][p].ssrCodes.splice(updatedSelection[j][p].ssrCodes.indexOf(ssr.ssrCode), 1);
			if (isConsideredCheckedBag(bagType)) {
				updatedSelection[j][p].checkedBagAllowed++;
			}
			return {
				...state,
				selected: updatedSelection
			};
		}

		case BagsActionTypes.UNSYNC_JOURNEYS: {
			const updatedSelection: BagSelectionModel = cloneDeep(state.selected);
			Object.keys(updatedSelection).forEach((journey, i) => {
				// reset all but first journey
				if (i !== 0) {
					Object.keys(updatedSelection[journey]).forEach(passenger => {
						// todo is this calculating the counts still?
						updatedSelection[journey][passenger] = new PassengerBagSelection();
						updatedSelection[journey][passenger].paid = { ...state.selected[journey][passenger].paid };
					});
				}
			});
			return {
				...state,
				selected: updatedSelection
			};
		}

		default: {
			return state;
		}
	}
}
