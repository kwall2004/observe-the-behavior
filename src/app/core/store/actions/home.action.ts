import { Action } from '@ngrx/store';

import { RetrieveBookingRequestModel, FlightStatusSearchInputModel } from '../../models';

export enum HomeActionTypes {
	SET_TAB = '[home] SET_TAB',
	CHECK_STATUS = '[home] CHECK_STATUS',
	RETRIEVE_BOOKING = '[home] RETRIEVE_BOOKING'
}

export class HomeSetTab implements Action {
	readonly type = HomeActionTypes.SET_TAB;

	constructor(public payload: number) { }
}

export class HomeCheckStatus implements Action {
	readonly type = HomeActionTypes.CHECK_STATUS;

	constructor(public payload: FlightStatusSearchInputModel) { }
}

export class HomeRetrieveBooking implements Action {
	readonly type = HomeActionTypes.RETRIEVE_BOOKING;

	constructor(public payload: RetrieveBookingRequestModel) { }
}

export type HomeAction =
	HomeSetTab |
	HomeCheckStatus |
	HomeRetrieveBooking;
