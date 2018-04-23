import { Action } from '@ngrx/store';
import { CredentialsModel } from '../../models';

export enum AuthActionTypes {
	INIT_TOKEN_DATA = '[auth] INIT_TOKEN_DATA',
	GET_TOKEN_DATA = '[auth] GET_TOKEN_DATA',
	SET_TOKEN_DATA = '[auth] SET_TOKEN_DATA',
	LOGIN = '[auth] LOGIN',
	LOGIN_SUCCESS = '[auth] LOGIN_SUCCESS',
	LOGIN_FAIL = '[auth] LOGIN_ERROR'
}

export class AuthInitTokenData implements Action {
	readonly type = AuthActionTypes.INIT_TOKEN_DATA;

	constructor(public payload: any) { }
}

export class AuthGetTokenData implements Action {
	readonly type = AuthActionTypes.GET_TOKEN_DATA;
}

export class AuthSetTokenData implements Action {
	readonly type = AuthActionTypes.SET_TOKEN_DATA;

	constructor(public payload: any) { }
}

export class AuthLogin implements Action {
	readonly type = AuthActionTypes.LOGIN;

	constructor(public payload: CredentialsModel) { }
}

export class AuthLoginSuccess implements Action {
	readonly type = AuthActionTypes.LOGIN_SUCCESS;

	constructor() { }
}

export class AuthLoginFail implements Action {
	readonly type = AuthActionTypes.LOGIN_FAIL;

	constructor(public payload: any) { }
}

export type AuthAction =
	AuthInitTokenData |
	AuthGetTokenData |
	AuthSetTokenData |
	AuthLogin |
	AuthLoginSuccess |
	AuthLoginFail;
