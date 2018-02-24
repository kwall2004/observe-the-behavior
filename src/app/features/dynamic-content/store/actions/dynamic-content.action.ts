import { Action } from '@ngrx/store';

export enum DynamicContentActionTypes {
	GET_CONTENT = '[app] GET_CONTENT',
	SET_CONTENT = '[app] SET_CONTENT'
}

export class GetContent implements Action {
	readonly type = DynamicContentActionTypes.GET_CONTENT;
}

export class SetContent implements Action {
	readonly type = DynamicContentActionTypes.SET_CONTENT;

	constructor(public payload: any) { }
}

export type DynamicContentAction =
	GetContent |
	SetContent;
