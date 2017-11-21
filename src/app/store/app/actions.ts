import { Action } from '@ngrx/store';

export const SET_TOKEN = 'SET_TOKEN';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) { }
}

export class GetToken implements Action {
  readonly type = GET_TOKEN;
}

export class GetTokenSuccess implements Action {
  readonly type = GET_TOKEN_SUCCESS;

  constructor(public payload: string) { }
}

export type All = SetToken | GetToken | GetTokenSuccess;