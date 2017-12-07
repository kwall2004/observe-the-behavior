import { Action } from '@ngrx/store';

export const SET_LOADING = '[app] SET_LOADING';
export const ADD_ERROR = '[app] ADD_ERROR';
export const REMOVE_ERRORS = '[app] REMOVE_ERRORS';
export const SET_TOKEN = '[app] SET_TOKEN';
export const GET_TOKEN = '[app] GET_TOKEN';
export const DELETE_TOKEN = '[app] DELETE_TOKEN';

export class SetLoading implements Action {
  readonly type = SET_LOADING;

  constructor(public payload: boolean) { }
}

export class AddError implements Action {
  readonly type = ADD_ERROR;

  constructor(public payload: object) { }
}

export class RemoveErrors implements Action {
  readonly type = REMOVE_ERRORS;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) { }
}

export class GetToken implements Action {
  readonly type = GET_TOKEN;
}

export class DeleteToken implements Action {
  readonly type = DELETE_TOKEN;
}

export type All =
  SetLoading |
  AddError |
  RemoveErrors |
  SetToken |
  GetToken |
  DeleteToken;
