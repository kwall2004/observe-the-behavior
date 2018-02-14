import { Action } from '@ngrx/store';
import { FlightStatusRequest } from '@app/features/flight-status/models/flight-status-request';



export const GET_FLIGHT_STATUS = '[FlightStatus] GET_FLIGHT_STATUS';


export class GetFlightStatus implements Action {
	readonly type = GET_FLIGHT_STATUS;

	constructor(public payload: FlightStatusRequest) { }
}

export type FlightStatusActions
	= GetFlightStatus;
