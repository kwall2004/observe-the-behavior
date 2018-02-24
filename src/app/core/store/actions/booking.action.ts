import { Action } from '@ngrx/store';

import { Passenger, Contact } from '../../../core';

export enum BookingActionTypes {
	SET_DATA = '[booking] SET_DATA',
	GET_DATA = '[booking] GET_DATA',
	SAVE_PASSENGER = '[booking] SAVE_PASSENGER',
	SAVE_PRIMARY_CONTACT = '[booking] SAVE_PRIMARY_CONTACT',
	ADD_PAYMENT = '[booking] ADD_PAYMENT',
	COMMIT = '[booking] COMMIT'
}

export class BookingSetData implements Action {
	readonly type = BookingActionTypes.SET_DATA;

	constructor(public payload: any) { }
}

export class BookingGetData implements Action {
	readonly type = BookingActionTypes.GET_DATA;

	constructor(public payload: {
		showErrors: boolean
	} = {
			showErrors: true
		}) { }
}

export class BookingSavePassenger implements Action {
	readonly type = BookingActionTypes.SAVE_PASSENGER;

	constructor(public payload: Passenger) { }
}

export class BookingSavePrimaryContact implements Action {
	readonly type = BookingActionTypes.SAVE_PRIMARY_CONTACT;

	constructor(public payload: Contact) { }
}

export class BookingAddPayment implements Action {
	readonly type = BookingActionTypes.ADD_PAYMENT;

	constructor(public payload: {
		accountNumber: string,
		accountHolderName: string
	}) { }
}

export class BookingCommit implements Action {
	readonly type = BookingActionTypes.COMMIT;
}

export type BookingAction =
	BookingSetData |
	BookingGetData |
	BookingSavePassenger |
	BookingSavePrimaryContact |
	BookingAddPayment |
	BookingCommit;
