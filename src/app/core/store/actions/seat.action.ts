import { Action } from '@ngrx/store';

export enum SeatActionTypes {
	LOAD_SEATMAPS = '[seat] Load Seatmaps',
	SET_SEATMAPS = '[seat] Set Seatmaps',
	SAVE_SEATS = '[seat] Save Seats',
	SET_SELECTION = '[seat] Set Selection',
	ASSIGN_SEAT = '[seat] Assign Seat',
	MOVE_PASSENGER = '[seat] Move Passenger',
	MOVE_SEGMENT = '[seat] Move Segment',
	SET_ACTIVE_PASSENGER = '[seat] Set Active Passenger',
	SET_ACTIVE_SEGMENT = '[seat] Set Active Segment',
	CLEAR_SELECTION = '[seat] Clear Selection',
	NAVIGATE = '[seat] Navigate'
}

export class SeatSaveSeats implements Action {
	readonly type = SeatActionTypes.SAVE_SEATS;
}
export class SeatLoadSeatMaps implements Action {
	readonly type = SeatActionTypes.LOAD_SEATMAPS;
}
export class SeatSetSeatMaps implements Action {
	readonly type = SeatActionTypes.SET_SEATMAPS;
	constructor(public payload: any) { }
}
export class SeatSetSelection implements Action {
	readonly type = SeatActionTypes.SET_SELECTION;
	constructor(public payload: any) { }
}
export class SeatAssignSeat implements Action {
	readonly type = SeatActionTypes.ASSIGN_SEAT;
	constructor(public payload: any) { }
}
export class SeatMovePassenger implements Action {
	readonly type = SeatActionTypes.MOVE_PASSENGER;
}
export class SeatMoveSegment implements Action {
	readonly type = SeatActionTypes.MOVE_SEGMENT;
	constructor(public payload: number) { }
}
export class SeatSetActivePassenger implements Action {
	readonly type = SeatActionTypes.SET_ACTIVE_PASSENGER;
	constructor(public payload: string) { }
}
export class SeatSetActiveSegment implements Action {
	readonly type = SeatActionTypes.SET_ACTIVE_SEGMENT;
	constructor(public payload: string) { }
}
export class SeatClearSelection implements Action {
	readonly type = SeatActionTypes.CLEAR_SELECTION;
}
export class SeatNavigate implements Action {
	readonly type = SeatActionTypes.NAVIGATE;
}

export type SeatAction =
	SeatLoadSeatMaps |
	SeatSetSeatMaps |
	SeatSaveSeats |
	SeatAssignSeat |
	SeatMovePassenger |
	SeatMoveSegment |
	SeatSetActivePassenger |
	SeatSetActiveSegment |
	SeatSetSelection |
	SeatClearSelection |
	SeatNavigate;
