import { Action } from '@ngrx/store';

import { Station, SellTripClick, FlightAvailabilitySearchCriteria } from '../../../core';

export enum AvailabilityActionTypes {
	GET_STATIONS = '[availability] GET_STATIONS',
	SET_STATIONS = '[availability] SET_STATIONS',
	SEARCH = '[availability] SEARCH',
	LOW_FARE_SEARCH = '[availability] LOW_FARE_SEARCH',
	SET_DATA = '[availability] SET_DATA',
	SET_LOW_FARE_DATA = '[availability] SET_LOW_FARE_DATA',
	SELL_TRIP = '[availability] SELL_TRIP'
}

export class AvailabilityGetStations implements Action {
	readonly type = AvailabilityActionTypes.GET_STATIONS;
}

export class AvailabilitySetStations implements Action {
	readonly type = AvailabilityActionTypes.SET_STATIONS;

	constructor(public payload: Station[]) { }
}

export class AvailabilitySearch implements Action {
	readonly type = AvailabilityActionTypes.SEARCH;

	constructor(public payload: FlightAvailabilitySearchCriteria) { }
}

export class AvailabilityLowFareSearch implements Action {
	readonly type = AvailabilityActionTypes.LOW_FARE_SEARCH;

	constructor(public payload: FlightAvailabilitySearchCriteria) { }
}

export class AvailabilitySetData implements Action {
	readonly type = AvailabilityActionTypes.SET_DATA;

	constructor(public payload: any) { }
}

export class AvailabilitySetLowFareData implements Action {
	readonly type = AvailabilityActionTypes.SET_LOW_FARE_DATA;

	constructor(public payload: any) { }
}

export class AvailabilitySellTrip implements Action {
	readonly type = AvailabilityActionTypes.SELL_TRIP;

	constructor(public payload: SellTripClick) { }
}

export type AvailabilityAction =
	AvailabilityGetStations |
	AvailabilitySetStations |
	AvailabilitySearch |
	AvailabilityLowFareSearch |
	AvailabilitySetData |
	AvailabilitySetLowFareData |
	AvailabilitySellTrip;
