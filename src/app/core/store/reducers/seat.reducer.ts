import { SeatActionTypes, SeatAction } from '../actions/seat.action';
import { parseDesignator, reformatSeatMap, cloneDeep } from '../../../shared/utilities';

export interface State {
	seatMaps: any;
	selection: any;
	activePassengerKey: any;
	activeSegmentKey: any;
}

const initialState: State = {
	seatMaps: null,
	selection: null,
	activePassengerKey: null,
	activeSegmentKey: null
};

export function reducer(state = initialState, action: SeatAction): State {
	switch (action.type) {
		case SeatActionTypes.SET_SELECTION: {
			const updatedSelection = {};
			if (action.payload) {
				action.payload.journeys.forEach(journey => {
					for (const segment of journey.segments) {
						updatedSelection[segment.segmentKey] = updatedSelection[segment.segmentKey] || {};
						const passengerKeys = Object.getOwnPropertyNames(segment.passengerSegment);
						for (const passengerKey of passengerKeys) {
							const passengerSegment = segment.passengerSegment[passengerKey];
							if (passengerSegment && passengerSegment.seats.length) {
								updatedSelection[segment.segmentKey][passengerKey] = { designator: passengerSegment.seats[0].unitDesignator, paid: (passengerSegment.seats[0].actionStatusCode === 'HK') };
							}
						}
					}
				});
			}
			return {
				...state,
				selection: updatedSelection
			};
		}
		case SeatActionTypes.SET_SEATMAPS: {
			const newState = {};
			for (const segmentKey in action.payload) {
				if (action.payload.hasOwnProperty(segmentKey)) {
					const segmentSeatMap = action.payload[segmentKey];
					newState[segmentKey] = {
						seatMap: reformatSeatMap(segmentSeatMap.seatMap.decks[1].compartments['Y'].units),
						fees: segmentSeatMap.fees
					};
				}
			}
			return {
				...state,
				seatMaps: newState
			};
		}
		case SeatActionTypes.SET_ACTIVE_PASSENGER: {
			return {
				...state,
				activePassengerKey: action.payload
			};
		}
		case SeatActionTypes.SET_ACTIVE_SEGMENT: {
			return {
				...state,
				activeSegmentKey: action.payload
			};
		}
		case SeatActionTypes.ASSIGN_SEAT: {
			const { unit, price, segmentKey, passengerKey } = action.payload;
			const designator = parseDesignator(unit.designator);

			const updatedSelection = cloneDeep(state.selection);
			updatedSelection[segmentKey][passengerKey] = { designator: unit.designator, price: price, unitKey: unit.unitKey };

			const updatedSeatMap = cloneDeep(state.seatMaps[segmentKey].seatMap);
			updatedSeatMap[designator.row].seats[designator.column].selectedByPassengerKey = passengerKey;

			return {
				...state,
				selection: updatedSelection,
				seatMaps: {
					...state.seatMaps,
					[segmentKey]: {
						...state.seatMaps[segmentKey],
						seatMap: [...updatedSeatMap]
					}
				}
			};
		}
		case SeatActionTypes.CLEAR_SELECTION: {
			const clearedSelection = cloneDeep(state.selection);
			for (const segment in clearedSelection) {
				for (const passenger in clearedSelection[segment]) {
					if (!clearedSelection[segment][passenger].paid) {
						delete clearedSelection[segment][passenger];
					}
				}
			}
			return {
				...state,
				selection: clearedSelection
			};
		}

		default: {
			return state;
		}
	}
}
