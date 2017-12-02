import { Action } from '@ngrx/store';

export const SELL_TRIP_SUCCESS = '[booking] SELL_TRIP_SUCCESS';
export const SELL_TRIP_FAILURE = '[booking] SELL_TRIP_FAILURE';

export class SellTripSuccess implements Action {
  readonly type = SELL_TRIP_SUCCESS;

  constructor(public payload: object) { }
}

export class SellTripFailure implements Action {
  readonly type = SELL_TRIP_FAILURE;

  constructor(public payload: object) { }
}

export type All = SellTripSuccess | SellTripFailure;