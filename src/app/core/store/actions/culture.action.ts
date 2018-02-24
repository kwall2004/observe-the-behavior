import { Action } from '@ngrx/store';

export enum CultureActionTypes {
	UPDATE_CULTURE = '[culture] UPDATE_CULTURE'
}

export class CultureUpdateCulture implements Action {
	readonly type = CultureActionTypes.UPDATE_CULTURE;

	constructor(public payload: { cultureCode: string }) { }
}

export type CultureAction = CultureUpdateCulture;
