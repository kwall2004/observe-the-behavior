import { Action } from '@ngrx/store';

export const UPDATE_CULTURE = '[Culture] Update culture';


export class UpdateCulture implements Action {
	readonly type = UPDATE_CULTURE;

	constructor(public payload: { cultureCode: string}) { }
}

export type Actions =  UpdateCulture;
