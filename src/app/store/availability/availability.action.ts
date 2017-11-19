import { AvailabilityState } from './availability.state';

import { Action } from '@ngrx/store';

export const GET_TOKEN = 'GET_TOKEN';
export const GET_FLIGHTS = 'GET_FLIGHTS';
export const SELL_TRIP = 'SELL_TRIP';

export class GetToken implements Action {
  readonly type = GET_TOKEN;
}

export class GetFlights implements Action {
  readonly type = GET_FLIGHTS;

  constructor(public payload: {
    startDate: Date
  }) { }
}

export class SellTrip implements Action {
  readonly type = SELL_TRIP;

  constructor(public payload: {
    journey: object
  }) { }
}

export type All = GetToken | GetFlights | SellTrip;