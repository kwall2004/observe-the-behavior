import { Action } from '@ngrx/store';

export const SET_DATA = '[booking] SET_DATA';
export const GET_DATA = '[booking] GET_DATA';
export const SET_PASSENGER_FIRST_NAME = '[booking] SET_PASSENGER_FIRST_NAME';
export const SET_PASSENGER_LAST_NAME = '[booking] SET_PASSENGER_LAST_NAME';
export const SAVE_PASSENGER = '[booking] SAVE_PASSENGER';
export const COMMIT = '[booking] COMMIT';

export class SetData implements Action {
  readonly type = SET_DATA;

  constructor(public payload: object) { }
}

export class GetData implements Action {
  readonly type = GET_DATA;
}

export class SetPassengerFirstName implements Action {
  readonly type = SET_PASSENGER_FIRST_NAME;

  constructor(public payload: string) { }
}

export class SetPassengerLastName implements Action {
  readonly type = SET_PASSENGER_LAST_NAME;

  constructor(public payload: string) { }
}

export class SavePassenger implements Action {
  readonly type = SAVE_PASSENGER;
}

export class Commit implements Action {
  readonly type = COMMIT;
}

export type All =
  SetData |
  GetData |
  SetPassengerFirstName |
  SetPassengerLastName |
  SavePassenger |
  Commit;
