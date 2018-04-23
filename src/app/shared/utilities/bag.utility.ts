import { PassengerBagSelection, SelectedBagCounts } from '../../core/models/bag/passenger-bag-selection.model';
import * as _countBy from 'lodash/countBy';

export function countChecked(soldSsrs): number {
	const soldChecked: string[] = soldSsrs.map((ssr) => ssr.ssrCode);
	const checkedSsrs = ['BAG1', 'BAG2', 'BAG3', 'BAG4', 'BAG5',
		'BG1M', 'BG2M', 'BG3M', 'BG4M', 'BG5M', 'BGZ1', 'BGZ2', 'BGZ3',
		'BGZ4', 'BGZ5', 'BG1Z', 'BG2Z', 'BG3Z', 'BG4Z', 'BG5Z', 'BGW1', 'BGW2', 'BGW3',
		'BGW4', 'BGW5', 'BW1M', 'BW2M', 'BW3M', 'BW4M', 'BW5M'];
	const setA = new Set(soldChecked);
	const setB = new Set(checkedSsrs);
	const intersection = Array.from(setA).filter(x => setB.has(x));
	return intersection.length;
}

export function countCarryOn(soldSsrs): number {
	const soldChecked: string[] = soldSsrs.map((ssr) => ssr.ssrCode);
	const carryOnSsrs = ['BAGC', 'BAGM', 'BGZC', 'BGCZ', 'BGWC', 'BGWM'];
	const setA = new Set(soldChecked);
	const setB = new Set(carryOnSsrs);
	const intersection = Array.from(setA).filter(x => setB.has(x));
	return intersection.length;
}

export function countSportingAndOverWeight(paxPaid: SelectedBagCounts, soldSsrs) {
	const bagPropertyMap = {
		SURF: 'surf',
		BIKE: 'bike',
		OVR6: 'oversize6',
		OVR8: 'oversize8',
		OWB4: 'overweight4',
		OWB5: 'overweight5',
		OWB7: 'overweight7'
	};
	const bagCounts = _countBy(soldSsrs, 'ssrCode');
	for (const bagType in bagPropertyMap) {
		paxPaid[bagPropertyMap[bagType]] = bagCounts[bagType] || 0;
	}
}

// mutates state, only use in reducer
export function calculateTotalCounts(passengerSelection: PassengerBagSelection) {
	for (const bagType in passengerSelection.paid) {
		if (passengerSelection.paid.hasOwnProperty(bagType)) {
			const total = passengerSelection.unpaid[bagType] + passengerSelection.paid[bagType];
			passengerSelection[bagType + 'TotalCount'] = total;
			if (isConsideredCheckedBag(bagType)) {
				passengerSelection.checkedBagAllowed = passengerSelection.checkedBagAllowed - total;
			}
		}
	}
	return;
}

export function isConsideredCheckedBag(bagType: string): boolean {
	return bagType === 'checked' || bagType === 'surf' || bagType === 'bike';
}
