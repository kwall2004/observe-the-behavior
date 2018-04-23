import { Action } from '@ngrx/store';

import { AvailabilitySearchModel } from '../../models';

export enum AvailabilityActionTypes {
	INIT_SEARCH_INPUT = '[availability] INIT_SEARCH_INPUT',
	SET_SEARCH_INPUT = '[availability] SET_SEARCH_INPUT',
	FLIGHT_SEARCH = '[availability] FLIGHT_SEARCH',
	FLIGHT_CAR_SEARCH = '[availability] FLIGHT_CAR_SEARCH',
	FLIGHT_HOTEL_SEARCH = '[availability] FLIGHT_HOTEL_SEARCH',
	FLIGHT_HOTEL_CAR_SEARCH = '[availability] FLIGHT_HOTEL_CAR_SEARCH'
}

export class AvailabilityInitSearchInput implements Action {
	readonly type = AvailabilityActionTypes.INIT_SEARCH_INPUT;

	constructor(public payload: AvailabilitySearchModel) { }
}

export class AvailabilitySetSearchInput implements Action {
	readonly type = AvailabilityActionTypes.SET_SEARCH_INPUT;

	constructor(public payload: AvailabilitySearchModel) { }
}

export class AvailabilityFlightCarSearch implements Action {
	readonly type = AvailabilityActionTypes.FLIGHT_CAR_SEARCH;

	constructor(public payload: AvailabilitySearchModel) { }
}

export class AvailabilityFlightSearch implements Action {
	readonly type = AvailabilityActionTypes.FLIGHT_SEARCH;

	constructor(public payload: AvailabilitySearchModel) { }
}

export class AvailabilityFlightHotelSearch implements Action {
	readonly type = AvailabilityActionTypes.FLIGHT_HOTEL_SEARCH;

	constructor(public payload: AvailabilitySearchModel) { }
}

export class AvailabilityFlightHotelCarSearch implements Action {
	readonly type = AvailabilityActionTypes.FLIGHT_HOTEL_CAR_SEARCH;

	constructor(public payload: AvailabilitySearchModel) { }
}

export type AvailabilityAction =
	AvailabilityInitSearchInput |
	AvailabilitySetSearchInput |
	AvailabilityFlightSearch |
	AvailabilityFlightCarSearch |
	AvailabilityFlightHotelSearch |
	AvailabilityFlightHotelCarSearch;
