import { Action } from '@ngrx/store';

export const ADD_ERROR = '[app] ADD_ERROR';
export const CLEAR_ERRORS = '[app] CLEAR_ERRORS';
export const SET_TOKEN = '[app] SET_TOKEN';
export const GET_TOKEN = '[app] GET_TOKEN';
export const GET_TOKEN_SUCCESS = '[app] GET_TOKEN_SUCCESS';

export class AddError implements Action {
  readonly type = ADD_ERROR;

  constructor(public payload: object) { }
}

export class ClearErrors implements Action {
  readonly type = CLEAR_ERRORS;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) { }
}

export class GetToken implements Action {
  readonly type = GET_TOKEN;
}

export class GetTokenSuccess implements Action {
  readonly type = GET_TOKEN_SUCCESS;

  constructor(public payload: object) { }
}

export type All = AddError |
  ClearErrors |
  SetToken |
  GetToken |
  GetTokenSuccess;