import { Action } from '@ngrx/store';

export const APP_START = '[app] APP START';
export const SET_LOADING = '[app] SET_LOADING';
export const ADD_ERROR = '[app] ADD_ERROR';
export const CLEAR_ERRORS = '[app] CLEAR_ERRORS';
export const GET_TOKEN_DATA = '[app] GET_TOKEN_DATA';
export const SET_TOKEN_DATA = '[app] SET_TOKEN_DATA';

export class AppStart implements Action {
	readonly type = APP_START;
}

export class SetLoading implements Action {
	readonly type = SET_LOADING;

	constructor(public payload: boolean) { }
}

export class AddError implements Action {
	readonly type = ADD_ERROR;

	constructor(public payload: any) { }
}

export class ClearErrors implements Action {
	readonly type = CLEAR_ERRORS;
}

export class GetTokenData implements Action {
	readonly type = GET_TOKEN_DATA;
}

export class SetTokenData implements Action {
	readonly type = SET_TOKEN_DATA;

	constructor(public payload: any) { }
}

export type AppAction =
	AppStart |
	SetLoading |
	AddError |
	ClearErrors |
	GetTokenData |
	SetTokenData;
