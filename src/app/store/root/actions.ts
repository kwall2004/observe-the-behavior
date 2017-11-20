import { Action } from '@ngrx/store';

export const GET_TOKEN = 'GET_TOKEN';

export class GetToken implements Action {
  readonly type = GET_TOKEN;

  constructor(public payload: string) { }
}

export type All = GetToken;