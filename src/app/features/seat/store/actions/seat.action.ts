import { Action } from '@ngrx/store';

export enum SeatsActionTypes {
	ASSIGN_SEATS = '[Seat] Assign Seats'
}

export class SeatsAssignSeats implements Action {
	readonly type = SeatsActionTypes.ASSIGN_SEATS;

	constructor() { }
}

export type SeatsAction =
	SeatsAssignSeats;

