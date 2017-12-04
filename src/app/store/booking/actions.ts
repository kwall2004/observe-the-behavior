import { Action } from '@ngrx/store';

export const SET_DATA = '[booking] SET_DATA';
export const GET_DATA = '[booking] GET_DATA';
export const SAVE_PASSENGER = '[booking] SAVE_PASSENGER'

export class SetData implements Action {
  readonly type = SET_DATA;

  constructor(public payload: object) { }
}

export class GetData implements Action {
  readonly type = GET_DATA;
}

export class SavePassenger implements Action {
  readonly type = SAVE_PASSENGER;

  constructor(public payload: {
    firstName: string,
    lastName: string
  }) { }
}

export type All = SetData |
  GetData |
  SavePassenger;