import { Action } from '@ngrx/store';
import { FlightStatusNotificationSubscriptionRequest } from '../../models';

export enum FlightStatusActionType {
	GET_FLIGHT_STATUS = '[flight-status] GET_FLIGHT_STATUS',
	GET_FLIGHT_STATUS_SUCCESS = '[flight-status] GET_FLIGHT_STATUS_SUCCESS',
	GET_FLIGHT_STATUS_ERROR = '[flight-status] GET_FLIGHT_STATUS_ERROR',
	POST_NOTIFICATION_SUBSCRIPTION_REQUEST = '[flight-status] POST_NOTIFICATION_SUBSCRIPTION_REQUEST',
	POST_NOTIFICATION_SUBSCRIPTION_SUCCESS = '[flight-status] POST_NOTIFICATION_SUBSCRIPTION_SUCCESS'
}

export class FlightStatusGetStatus implements Action {
	public readonly type: FlightStatusActionType;
	public readonly payload: any;
	constructor() {
		this.type = FlightStatusActionType.GET_FLIGHT_STATUS;
	}
}

export class FlightStatusGetStatusSuccess implements Action {
	public readonly type: FlightStatusActionType;
	constructor(public readonly payload: any) {
		this.type = FlightStatusActionType.GET_FLIGHT_STATUS_SUCCESS;
	}
}

export class FlightStatusGetStatusError implements Action {
	public readonly type: FlightStatusActionType;
	public readonly payload: any;
	constructor() {
		this.type = FlightStatusActionType.GET_FLIGHT_STATUS_ERROR;
	}
}

export class FlightStatusAddNotificationSubscription implements Action {
	public readonly type: FlightStatusActionType;
	constructor(public readonly payload: { request: FlightStatusNotificationSubscriptionRequest, journeyIndex: number }) {
		this.type = FlightStatusActionType.POST_NOTIFICATION_SUBSCRIPTION_REQUEST;
	}
}

export class FlightStatusAddNotificationSubscriptionSuccess implements Action {
	public readonly type: FlightStatusActionType;
	constructor(public readonly payload: number) {
		this.type = FlightStatusActionType.POST_NOTIFICATION_SUBSCRIPTION_SUCCESS;
	}
}

export type FlightStatusAction =
	| FlightStatusGetStatus
	| FlightStatusGetStatusSuccess
	| FlightStatusGetStatusError
	| FlightStatusAddNotificationSubscription
	| FlightStatusAddNotificationSubscriptionSuccess;
