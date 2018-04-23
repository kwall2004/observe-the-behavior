import { createSelector } from '@ngrx/store';
import { bagsFeatureState } from '../reducers';
import { ssrsBagClubSsrsState, ssrAvailabilityState, ssrsBagSsrsState } from './ssr.selector';
import { userIsClub } from './user.selector';
import { PassengerBagSelection } from '../../models/bag/passenger-bag-selection.model';

export const bagsSelectedState = createSelector(
	bagsFeatureState,
	(state) => state.selected
);

// todo swap this with the booking configuration results
export const bagsAllowedBagCountState = createSelector(
	bagsSelectedState,
	(state) => {
		const result = {};
		for (const journeyKey in state) {
			if (state.hasOwnProperty(journeyKey)) {
				result[journeyKey] = { checked: 5, carryOn: 1 };
			}
		}
		return result;
	}
);

export const bagsJourneySpecialBagTotalState = createSelector(
	bagsSelectedState,
	(state) => {
		const specialBagTypes = ['bike', 'surf', 'overweight4', 'overweight5', 'overweight7', 'oversize6', 'oversize8'];
		return Object.keys(state).reduce((result, journey) => {
			result[journey] = {};
			result[journey].total = 0;
			specialBagTypes.forEach(bagType => {
				result[journey].total += Object.keys(state[journey]).reduce((typeTotal, passenger) => typeTotal + state[journey][passenger][bagType + 'Total'], 0);
			});
			return result;
		}, {});
	}
);

export const bagsJourneyTotalsState = createSelector(
	bagsSelectedState,
	bagsJourneySpecialBagTotalState,
	(selection, specialBagTotals) => {
		return Object.keys(selection).reduce((result, journey) => {
			const totalCarry = Object.keys(selection[journey]).reduce((carryTotal, passenger) => carryTotal + selection[journey][passenger].carryOnTotal, 0);
			const totalChecked = Object.keys(selection[journey]).reduce((checkedTotal, passenger) => checkedTotal + selection[journey][passenger].checkedTotal, 0);
			result[journey] = {};
			result[journey].total = totalCarry + totalChecked + specialBagTotals[journey].total;
			return result;
		}, {});
	}
);

export const bagsTotalState = createSelector(
	bagsJourneyTotalsState,
	(state) => Object.keys(state).reduce((result, journey) => result + state[journey].total, 0)
);

// this is either the club price, or the normal price, depending on wether the session is club or not.
// it is then subtracted from bagsTotalState, or bagsTotalState is subtracted from this, to get savings
export const bagsTotalClubState = createSelector(
	bagsSelectedState,
	ssrAvailabilityState,
	ssrsBagSsrsState,
	ssrsBagClubSsrsState,
	userIsClub,
	bagsJourneySpecialBagTotalState,
	(selection, ssrs, nonClubSsrs, clubSsrs, isClub, specialBagTotals) => {
		let total = 0;
		const ssrsToCalculate = isClub ? nonClubSsrs : clubSsrs;
		for (const j in selection) {
			const journey = selection[j];
			for (const p in journey) {
				const passenger: PassengerBagSelection = journey[p];
				if (passenger.unpaid.carryOn > 0) {
					total += ssrs[j][ssrsToCalculate['carryOn']].passengersAvailability[p].price;
				}
				if (passenger.unpaid.checked > 0) {
					for (let i = 0; i < passenger.unpaid.checked; i++) {
						total += ssrs[j][ssrsToCalculate['checked' + (i + passenger.paid.checked + 1)]].passengersAvailability[p].price;
					}
				}
			}
			total += specialBagTotals[j].total;
		}
		return total;
	}
);

// the idea is to set this object with some type of business strategy (flow + loyalty status)
// to determine which ssr codes are the active ones to be showing information for on the ui.
export const bagsActiveBagSsrsState = createSelector(
	ssrsBagSsrsState,
	ssrsBagClubSsrsState,
	userIsClub,
	bagsSelectedState,
	(bagSsrs, bagClubSsrs, isClub, ) => {
		const activeSsrs = isClub ? bagClubSsrs : bagSsrs;
		// todo handle military
		return {
			...activeSsrs,
			surf: 'SURF',
			bike: 'BIKE',
			oversize6: 'OVR6',
			oversize8: 'OVR8',
			overweight4: 'OWB4',
			overweight5: 'OWB5',
			overweight7: 'OWB7'
		};
	}
);

