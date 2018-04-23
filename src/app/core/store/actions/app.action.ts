import { Action } from '@ngrx/store';

export enum AppActionTypes {
	START = '[app] START',
	SET_LOADING = '[app] SET_LOADING',
	ADD_ERROR = '[app] ADD_ERROR',
	CLEAR_ERRORS = '[app] CLEAR_ERRORS'
}

export class AppStart implements Action {
	readonly type = AppActionTypes.START;
}

export class AppSetLoading implements Action {
	readonly type = AppActionTypes.SET_LOADING;

	constructor(public payload: boolean) { }
}

export class AppAddError implements Action {
	readonly type = AppActionTypes.ADD_ERROR;

	constructor(public payload: any) { }
}

export class AppClearErrors implements Action {
	readonly type = AppActionTypes.CLEAR_ERRORS;
}

export type AppAction =
	AppStart |
	AppSetLoading |
	AppAddError |
	AppClearErrors;
