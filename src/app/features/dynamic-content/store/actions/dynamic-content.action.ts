import { Action } from '@ngrx/store';

export const GET_CONTENT = '[app] GET_CONTENT';
export const SET_CONTENT = '[app] SET_CONTENT';

export class GetContent implements Action {
  readonly type = GET_CONTENT;
}

export class SetContent implements Action {
  readonly type = SET_CONTENT;

  constructor(public payload: object) { }
}

export type DynamicContentAction =
  GetContent |
  SetContent;
