import { Action } from '@ngrx/store';

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SELL_TRIP = 'SELL_TRIP';

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: {
    startDate: Date
  }) { }
}

export class SearchSuccess implements Action {
  readonly type = SEARCH_SUCCESS;

  constructor(public payload: object) { }
}

export class SearchFailure implements Action {
  readonly type = SEARCH_FAILURE;

  constructor(public payload: object) { }
}

export class SellTrip implements Action {
  readonly type = SELL_TRIP;

  constructor(public payload: {
    journey: object
  }) { }
}

export type All = ClearError | Search | SearchSuccess | SearchFailure | SellTrip;