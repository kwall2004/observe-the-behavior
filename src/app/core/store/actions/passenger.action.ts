import { Action } from '@ngrx/store';

export enum PassengerActionTypes {
	LOAD_PASSENGER_SSR = '[passenger] LOAD_PASSENGER_SSR',
	SET_PASSENGER_SSR = '[passenger] SET_PASSENGER_SSR'
}

export class PassengerLoadSsrs implements Action {
	readonly type = PassengerActionTypes.LOAD_PASSENGER_SSR;
}

export class PassengerSetSsrs implements Action {
	readonly type = PassengerActionTypes.SET_PASSENGER_SSR;
	constructor(public payload: any) { }
}

export type PassengerAction =
	PassengerLoadSsrs | PassengerSetSsrs;
