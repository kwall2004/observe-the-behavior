import * as fromAvailability from '../actions/availability.action';
import * as moment from 'moment';

import { Station } from '../../models/station.model';

export interface State {
	cities: object;
	stations: [Station];
	origin: Station;
	destination: Station;
	lowFareDate: Date;
	beginDate: Date;
	lowFareData: object;
	data: object;
}

const beginDateString: string = localStorage.getItem('beginDate');
const beginDate: Date = beginDateString ? new Date(beginDateString) : new Date();

const initialState: State = {
	cities: null,
	stations: null,
	origin: null,
	destination: null,
	lowFareDate: beginDate,
	beginDate: beginDate,
	lowFareData: null,
	data: null
};

export function reducer(state = initialState, action: fromAvailability.AvailabilityAction): State {
	switch (action.type) {
		case fromAvailability.SET_STATIONS:
			let origin: Station;
			let destination: Station;
			try {
				origin = JSON.parse(localStorage.getItem('origin'));
			} catch (e) {
				origin = null;
			}
			try {
				destination = JSON.parse(localStorage.getItem('destination'));
			} catch (e) {
				destination = null;
			}
			return {
				...state,
				stations: action.payload,
				origin: action.payload && action.payload.find(station => {
					return origin && station.stationCode === origin.stationCode;
				}),
				destination: action.payload && action.payload.find(station => {
					return destination && station.stationCode === destination.stationCode;
				})
			};

		case fromAvailability.SET_ORIGIN:
			localStorage.setItem('origin', JSON.stringify(action.payload));
			return {
				...state,
				origin: action.payload
			};

		case fromAvailability.SET_DESTINATION:
			localStorage.setItem('destination', JSON.stringify(action.payload));
			return {
				...state,
				destination: action.payload
			};

		case fromAvailability.RESET_LOW_FARE_DATE:
			return {
				...state,
				lowFareDate: state.beginDate
			};

		case fromAvailability.ADD_WEEK_TO_LOW_FARE_DATE:
			return {
				...state,
				lowFareDate: moment(state.lowFareDate).add(7, 'days').toDate()
			};

		case fromAvailability.SUBTRACT_WEEK_FROM_LOW_FARE_DATE:
			return {
				...state,
				lowFareDate: moment(state.lowFareDate).subtract(7, 'days').toDate()
			};

		case fromAvailability.SET_BEGIN_DATE:
			localStorage.setItem('beginDate', action.payload.toString());
			return {
				...state,
				beginDate: action.payload
			};

		case fromAvailability.SET_LOW_FARE_DATA:
			return {
				...state,
				lowFareData: action.payload
			};

		case fromAvailability.SET_AVAILABILITY_DATA:
			return {
				...state,
				data: action.payload
			};

		default:
			return state;
	}
}
