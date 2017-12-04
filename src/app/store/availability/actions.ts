import { Action } from '@ngrx/store';

export const SET_ORIGIN = '[availability] SET_ORIGIN';
export const SET_DESTINATION = '[availability] SET_DESTINATION';
export const SET_BEGIN_DATE = '[availability] SET_BEGIN_DATE';
export const GET_CITIES = '[availability] GET_CITIES';
export const GET_CITIES_SUCCESS = '[availability] GET_CITIES_SUCCESS';
export const SEARCH = '[availability] SEARCH';
export const SEARCH_SUCCESS = '[availability] SEARCH_SUCCESS';
export const CLEAR_DATA = '[availability] CLEAR_DATA';
export const SELL_TRIP = '[availability] SELL_TRIP';

export class GetCities implements Action {
  readonly type = GET_CITIES;
}

export class GetCitiesSuccess implements Action {
  readonly type = GET_CITIES_SUCCESS;

  constructor(public payload: object) { }
}

export class SetOrigin implements Action {
  readonly type = SET_ORIGIN;

  constructor(public payload: string) { }
}

export class SetDestination implements Action {
  readonly type = SET_DESTINATION;

  constructor(public payload: string) { }
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

export class ClearData implements Action {
  readonly type = CLEAR_DATA;
}

export class SellTrip implements Action {
  readonly type = SELL_TRIP;

  constructor(public payload: {
    journey: object
  }) { }
}

export type All = SetOrigin |
  SetDestination |
  SetBeginDate |
  GetCities |
  GetCitiesSuccess |
  Search | 
  SearchSuccess | 
  ClearData |
  SellTrip;