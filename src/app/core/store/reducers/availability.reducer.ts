import { AvailabilityActionTypes, AvailabilityAction } from '../actions/availability.action';

import { Station, FlightAvailabilitySearchCriteria } from '../../../core';

export interface State {
	stations: Station[];
	searchCriteria: FlightAvailabilitySearchCriteria;
	lowFareSearchCriteria: FlightAvailabilitySearchCriteria;
	data: any;
	lowFareData: any;
}

const originStationCode = localStorage.getItem('originStationCode');
const destinationStationCode = localStorage.getItem('destinationStationCode');
const beginDateString = localStorage.getItem('beginDate');
const endDateString = localStorage.getItem('endDate');

const initialState: State = {
	stations: null,
	searchCriteria: {
		origin: null,
		destination: null,
		beginDate: beginDateString ? new Date(beginDateString) : new Date(),
		endDate: endDateString ? new Date(endDateString) : new Date(),
		adultCount: 2,
		childCount: 0
	},
	lowFareSearchCriteria: {
		origin: null,
		destination: null,
		beginDate: beginDateString ? new Date(beginDateString) : new Date(),
		endDate: endDateString ? new Date(endDateString) : new Date(),
		adultCount: 2,
		childCount: 0
	},
	data: null,
	lowFareData: null
};

export function reducer(state = initialState, action: AvailabilityAction): State {
	switch (action.type) {
		case AvailabilityActionTypes.SET_STATIONS:
			return {
				...state,
				stations: action.payload,
				searchCriteria: {
					...state.searchCriteria,
					origin: action.payload && action.payload.find(station => {
						return originStationCode && station.stationCode === originStationCode;
					}),
					destination: action.payload && action.payload.find(station => {
						return destinationStationCode && station.stationCode === destinationStationCode;
					})
				}
			};

		case AvailabilityActionTypes.SEARCH:
			localStorage.setItem('originStationCode', action.payload.origin.stationCode);
			localStorage.setItem('destinationStationCode', action.payload.destination.stationCode);
			localStorage.setItem('beginDate', action.payload.beginDate.toString());
			localStorage.setItem('endDate', action.payload.endDate.toString());
			return {
				...state,
				searchCriteria: action.payload
			};

		case AvailabilityActionTypes.LOW_FARE_SEARCH:
			return {
				...state,
				lowFareSearchCriteria: action.payload
			};

		case AvailabilityActionTypes.SET_DATA:
			return {
				...state,
				data: action.payload
			};

		case AvailabilityActionTypes.SET_LOW_FARE_DATA:
			return {
				...state,
				lowFareData: action.payload
			};
	}

	return state;
}
