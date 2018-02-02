import { Action } from '@ngrx/store';

export const SET_LOADING = '[app] SET_LOADING';
export const ADD_ERROR = '[app] ADD_ERROR';
export const CLEAR_ERRORS = '[app] CLEAR_ERRORS';
export const SET_TOKEN = '[app] SET_TOKEN';
export const GET_TOKEN = '[app] GET_TOKEN';

export class SetLoading implements Action {
	readonly type = SET_LOADING;

	constructor(public payload: boolean) { }
}

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

export type AppAction =
	SetLoading |
	AddError |
	ClearErrors |
	SetToken |
	GetToken;
