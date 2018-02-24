import { Action } from '@ngrx/store';

import { RetrieveBookingRequest, FlightStatusRequest } from '../../models';

export enum HomeActionTypes {
	SET_TAB = '[Home] Set Tab',
	CHECK_STATUS = '[Home] Check Status',
	RETRIEVE_BOOKING = '[Home] Retrieve Booking'
}

export class HomeSetTab implements Action {
	readonly type = HomeActionTypes.SET_TAB;

	constructor(public payload: number) { }
}

export class HomeCheckStatus implements Action {
	readonly type = HomeActionTypes.CHECK_STATUS;

	constructor(public payload: FlightStatusRequest) { }
}

export class HomeRetrieveBooking implements Action {
	readonly type = HomeActionTypes.RETRIEVE_BOOKING;

	constructor(public payload: RetrieveBookingRequest) { }
}


export type HomeAction =
	| HomeSetTab
	| HomeCheckStatus
	| HomeRetrieveBooking;
