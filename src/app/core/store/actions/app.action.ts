import { Action } from '@ngrx/store';

export enum AppActionTypes {
	APP_START = '[app] APP START',
	SET_LOADING = '[app] SET_LOADING',
	ADD_ERROR = '[app] ADD_ERROR',
	CLEAR_ERRORS = '[app] CLEAR_ERRORS',
	GET_TOKEN_DATA = '[app] GET_TOKEN_DATA',
	SET_TOKEN_DATA = '[app] SET_TOKEN_DATA'
}

export class AppStart implements Action {
	readonly type = AppActionTypes.APP_START;
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

export class AppGetTokenData implements Action {
	readonly type = AppActionTypes.GET_TOKEN_DATA;

	constructor(public payload: {
		onlyIfBookingNotNull: boolean;
	} = {
			onlyIfBookingNotNull: false
		}) { }
}

export class AppSetTokenData implements Action {
	readonly type = AppActionTypes.SET_TOKEN_DATA;

	constructor(public payload: any) { }
}

export type AppAction =
	AppStart |
	AppSetLoading |
	AppAddError |
	AppClearErrors |
	AppGetTokenData |
	AppSetTokenData;
