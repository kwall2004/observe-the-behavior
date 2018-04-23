import { Action } from '@ngrx/store';

import { ContactModel } from '../../models';
import { AddPaymentRequestModel } from '../../../features/payment';

export enum BookingActionTypes {
	SET_DATA = '[booking] SET_DATA',
	GET_DATA = '[booking] GET_DATA',
	ADD_PAYMENT = '[booking] ADD_PAYMENT',
	COMMIT = '[booking] COMMIT',
	COMMIT_SUCCESS = '[booking] COMMIT SUCCESS',
	UPDATE = '[booking] UPDATE',
	UPDATE_SUCCESS = '[booking] UPDATE SUCCESS',
	RESET = '[booking] RESET',
	RESET_SUCCESS = '[booking] RESET_SUCCESS',
	BOOKING_NOT_FOUND = '[booking] BOOKING_NOT_FOUND',
	UPDATE_PRIMARY_CONTACT = '[booking] UPDATE_PRIMARY_CONTACT',
	SAVE_PASSENGERS_AND_PRIMARY_CONTACT = '[booking] SAVE_PASSENGERS_AND_PRIMARY_CONTACT',
	SAVE_PASSENGERS_SSRS = '[booking] Save Pasenger Ssrs',
	SET_CONTACT_FROM_LOGIN = '[booking] SET_CONTACT_FROM_LOGIN',
	SET_PASSENGER_FROM_LOGIN = '[booking] SET_PASSENGER_FROM_LOGIN',
	UPDATE_PASSENGERS_PASSPORT = '[booking] UPDATE_PASSENGERS_PASSPORT',

}

export class BookingSetData implements Action {
	readonly type = BookingActionTypes.SET_DATA;

	constructor(public payload: any) { }
}

export class BookingGetData implements Action {
	readonly type = BookingActionTypes.GET_DATA;
}

export class BookingUpdatePrimaryContact implements Action {
	readonly type = BookingActionTypes.UPDATE_PRIMARY_CONTACT;

	constructor(public payload: ContactModel) { }
}

export class BookingAddPayment implements Action {
	readonly type = BookingActionTypes.ADD_PAYMENT;

	constructor(public payload: AddPaymentRequestModel) { }
}

export class BookingCommit implements Action {
	readonly type = BookingActionTypes.COMMIT;
}

export class BookingCommitSuccess implements Action {
	readonly type = BookingActionTypes.COMMIT_SUCCESS;
}

export class BookingUpdate implements Action {
	readonly type = BookingActionTypes.UPDATE;
}

export class BookingUpdateSuccess implements Action {
	readonly type = BookingActionTypes.UPDATE_SUCCESS;
}

export class BookingReset implements Action {
	readonly type = BookingActionTypes.RESET;
}

export class BookingResetSuccess implements Action {
	readonly type = BookingActionTypes.RESET_SUCCESS;
}

export class BookingNotFound implements Action {
	readonly type = BookingActionTypes.BOOKING_NOT_FOUND;
	constructor(public payload: any) { }
}

export class BookingSetContactFromLogin implements Action {
	readonly type = BookingActionTypes.SET_CONTACT_FROM_LOGIN;
	constructor(public payload: any) { }
}

export class BookingSetPassengerFromLogin implements Action {
	readonly type = BookingActionTypes.SET_PASSENGER_FROM_LOGIN;
	constructor(public payload: any) { }
}

export class BookingSavePassengerContact implements Action {
	readonly type = BookingActionTypes.SAVE_PASSENGERS_AND_PRIMARY_CONTACT;
	constructor(public payload: any) { }
}

export class BookingSavePassengerSsrs implements Action {
	readonly type = BookingActionTypes.SAVE_PASSENGERS_SSRS;
	constructor(public payload: any) { }
}

export class BookingUpdatePassengerPassport implements Action {
	readonly type = BookingActionTypes.UPDATE_PASSENGERS_PASSPORT;

	constructor(public payload: any) { }
}



export type BookingAction =
	BookingSetData |
	BookingGetData |
	BookingUpdatePrimaryContact |
	BookingAddPayment |
	BookingCommit |
	BookingCommitSuccess |
	BookingUpdate |
	BookingUpdateSuccess |
	BookingReset |
	BookingResetSuccess |
	BookingNotFound |
	BookingSetContactFromLogin |
	BookingSetPassengerFromLogin |
	BookingSavePassengerContact |
	BookingUpdatePassengerPassport;
