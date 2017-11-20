import { Action } from '@ngrx/store';

export const GET_FLIGHTS = 'GET_FLIGHTS';
export const GET_FLIGHTS_SUCCESS = 'GET_FLIGHTS_SUCCESS';
export const GET_FLIGHTS_ERROR = 'GET_FLIGHTS_ERROR';
export const SELL_TRIP = 'SELL_TRIP';

export class GetFlights implements Action {
  readonly type = GET_FLIGHTS;

  constructor(public payload: {
    startDate: Date
  }) { }
}

export class GetFlightsSuccess implements Action {
  readonly type = GET_FLIGHTS_SUCCESS;

  constructor(public payload: object) { }
}

export class GetFlightsError implements Action {
  readonly type = GET_FLIGHTS_ERROR;

  constructor(public payload: object) { }
}

export class SellTrip implements Action {
  readonly type = SELL_TRIP;

  constructor(public payload: {
    journey: object
  }) { }
}

export type All = GetFlights | GetFlightsSuccess | GetFlightsError | SellTrip;