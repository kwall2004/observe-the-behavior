import { Action } from '@ngrx/store';
import { AddStoredPaymentRequestModel } from '../../../features/payment';

export enum UserActionTypes {
	GET_USER = '[user] GET_USER',
	SET_USER = '[user] SET_USER',
	ADD_STORED_PAYMENT = '[user] ADD_STORED_PAYMENT'
}

export class UserGet implements Action {
	readonly type = UserActionTypes.GET_USER;

	constructor() { }
}

export class UserSet implements Action {
	readonly type = UserActionTypes.SET_USER;

	constructor(public payload: any) { }
}

export class UserAddStoredPayment implements Action {
	readonly type = UserActionTypes.ADD_STORED_PAYMENT;

	constructor(public payload: AddStoredPaymentRequestModel) { }
}

export type UserAction =
	UserGet |
	UserSet |
	UserAddStoredPayment;
