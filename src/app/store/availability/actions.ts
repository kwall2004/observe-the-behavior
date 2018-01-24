import { Action } from '@ngrx/store';

import { Station } from '../../models/station';

export const SET_ORIGIN = '[availability] SET_ORIGIN';
export const SET_DESTINATION = '[availability] SET_DESTINATION';
export const RESET_LOW_FARE_DATE = '[availability] RESET_LOW_FARE_DATE';
export const ADD_WEEK_TO_LOW_FARE_DATE = '[availability] ADD_WEEK_TO_LOW_FARE_DATE';
export const SUBTRACT_WEEK_FROM_LOW_FARE_DATE = '[availability] SUBTRACT_WEEK_FROM_LOW_FARE_DATE';
export const SET_BEGIN_DATE = '[availability] SET_BEGIN_DATE';
export const GET_CITIES = '[availability] GET_CITIES';
export const SET_CITIES = '[availability] SET_CITIES';
export const GET_STATIONS = '[availability] GET_STATIONS';
export const SET_STATIONS = '[availability] SET_STATIONS';
export const SEARCH = '[availability] SEARCH';
export const SET_LOW_FARE_DATA = '[availability] SET_LOW_FARE_DATA';
export const SET_DATA = '[availability] SET_DATA';
export const SELL_TRIP = '[availability] SELL_TRIP';

export class GetCities implements Action {
  readonly type = GET_CITIES;
}

export class SetCities implements Action {
  readonly type = SET_CITIES;

  constructor(public payload: object) { }
}

export class GetStations implements Action {
  readonly type = GET_STATIONS;
}

export class SetStations implements Action {
  readonly type = SET_STATIONS;

  constructor(public payload: [Station]) { }
}

export class SetOrigin implements Action {
  readonly type = SET_ORIGIN;

  constructor(public payload: Station) { }
}

export class SetDestination implements Action {
  readonly type = SET_DESTINATION;

  constructor(public payload: Station) { }
}

export class ResetLowFareDate implements Action {
  readonly type = RESET_LOW_FARE_DATE;
}

export class AddWeekToLowFareDate implements Action {
  readonly type = ADD_WEEK_TO_LOW_FARE_DATE;
}

export class SubtractWeekFromLowFareDate implements Action {
  readonly type = SUBTRACT_WEEK_FROM_LOW_FARE_DATE;
}

export class SetBeginDate implements Action {
  readonly type = SET_BEGIN_DATE;

  constructor(public payload: Date) { }
}

export class Search implements Action {
  readonly type = SEARCH;
}

export class SetLowFareData implements Action {
  readonly type = SET_LOW_FARE_DATA;

  constructor(public payload: object) { }
}

export class SetData implements Action {
  readonly type = SET_DATA;

  constructor(public payload: object) { }
}

export class SellTrip implements Action {
  readonly type = SELL_TRIP;

  constructor(
    public payload: {
      journeyKey: string;
      fareKey: string;
    }
  ) { }
}

export type All =
  SetOrigin |
  SetDestination |
  ResetLowFareDate |
  AddWeekToLowFareDate |
  SubtractWeekFromLowFareDate |
  SetBeginDate |
  GetCities |
  SetCities |
  GetStations |
  SetStations |
  Search |
  SetLowFareData |
  SetData |
  SellTrip;
