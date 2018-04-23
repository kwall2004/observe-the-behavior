import { Action } from '@ngrx/store';

export enum SsrActionTypes {
	LOAD_AVAILABILITY = '[ssr] LOAD_AVAILABILITY',
	LOAD_AVAILABILITY_SUCCESS = '[ssr] LOAD_AVAILABILITY_SUCCESS'
}

export class SsrLoadAvailability implements Action {
	readonly type = SsrActionTypes.LOAD_AVAILABILITY;
}

export class SsrLoadAvailabilitySuccess implements Action {
	readonly type = SsrActionTypes.LOAD_AVAILABILITY_SUCCESS;
	constructor(public payload: any) { }
}

export type SsrAction =
	SsrLoadAvailability |
	SsrLoadAvailabilitySuccess;
