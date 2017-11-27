import { Action } from '@ngrx/store';

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SET_ORIGIN = 'SET_ORIGIN';
export const SET_DESTINATION = 'SET_DESTINATION';
export const SET_BEGIN_DATE = 'SET_BEGIN_DATE';
export const GET_CITIES = 'GET_CITIES';
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS';
export const GET_CITIES_FAILURE = 'GET_CITIES_FAILURE';
export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SELL_TRIP = 'SELL_TRIP';

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class GetCities implements Action {
  readonly type = GET_CITIES;
}

export class GetCitiesSuccess implements Action {
  readonly type = GET_CITIES_SUCCESS;

  constructor(public payload: object) { }
}

export class GetCitiesFailure implements Action {
  readonly type = GET_CITIES_FAILURE;

  constructor(public payload: object) { }
}

export class SetOrigin implements Action {
  readonly type = SET_ORIGIN;

  constructor(public payload: object) { }
}

export class SetDestination implements Action {
  readonly type = SET_DESTINATION;

  constructor(public payload: object) { }
}

export class SetBeginDate implements Action {
  readonly type = SET_BEGIN_DATE;

  constructor(public payload: Date) { }
}

export class Search implements Action {
  readonly type = SEARCH;
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

export type All = ClearError | 
  SetOrigin |
  SetDestination |
  SetBeginDate |
  GetCities |
  GetCitiesSuccess |
  GetCitiesFailure |
  Search | 
  SearchSuccess | 
  SearchFailure | 
  SellTrip;