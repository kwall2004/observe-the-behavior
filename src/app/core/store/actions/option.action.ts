import { Action } from '@ngrx/store';

export enum OptionActionTypes {
	SET_FLEX = '[option] SET_FLEX',
	SET_SHORTCUT_SECURITY = '[option] SET_SHORTCUT_SECURITY',
	SET_SHORTCUT_BOARDING = '[option] SET_SHORTCUT_BOARDING',
	SET_CHECK_IN = '[option] SET_CHECK_IN',
	SAVE_OPTIONS = '[option] SAVE_OPTIONS',
	SAVE_OPTIONS_SUCCESS = '[option] SAVE_OPTIONS_SUCCESS'
}

export class OptionSetFlex implements Action {
	readonly type = OptionActionTypes.SET_FLEX;

	constructor(public payload: boolean) { }
}

export class OptionSetShortCutSecurity implements Action {
	readonly type = OptionActionTypes.SET_SHORTCUT_SECURITY;

	constructor(public payload: any) { }
}

export class OptionSetShortCutBoarding implements Action {
	readonly type = OptionActionTypes.SET_SHORTCUT_BOARDING;

	constructor(public payload: boolean) { }
}

export class OptionSetCheckIn implements Action {
	readonly type = OptionActionTypes.SET_CHECK_IN;

	constructor(public payload: string) { }
}

export class OptionSaveOptions implements Action {
	readonly type = OptionActionTypes.SAVE_OPTIONS;

	constructor() { }
}

export class OptionSaveOptionsSuccess implements Action {
	readonly type = OptionActionTypes.SAVE_OPTIONS_SUCCESS;

	constructor() { }
}



export type OptionAction =
	| OptionSetFlex
	| OptionSetShortCutSecurity
	| OptionSetShortCutBoarding
	| OptionSetCheckIn
	| OptionSaveOptions
	| OptionSaveOptionsSuccess;
