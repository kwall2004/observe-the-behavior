import { Action } from '@ngrx/store';

export const SET_ORIGIN = '[availability] SET_ORIGIN';
export const SET_DESTINATION = '[availability] SET_DESTINATION';
export const SET_BEGIN_DATE = '[availability] SET_BEGIN_DATE';
export const GET_CITIES = '[availability] GET_CITIES';
export const SET_CITIES = '[availability] SET_CITIES';
export const SEARCH = '[availability] SEARCH';
export const SET_DATA = '[availability] SET_DATA';
export const CLEAR_DATA = '[availability] CLEAR_DATA';
export const SELL_TRIP = '[availability] SELL_TRIP';

export class GetCities implements Action {
  readonly type = GET_CITIES;
}

export class SetCities implements Action {
  readonly type = SET_CITIES;

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

export class SetData implements Action {
  readonly type = SET_DATA;

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
  SetCities |
  Search | 
  SetData | 
  ClearData |
  SellTrip;