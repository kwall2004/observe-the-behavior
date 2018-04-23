import { Action } from '@ngrx/store';

export enum CarActionTypes {
	SEARCH = '[car] SEARCH'
}

export class CarSearch implements Action {
	readonly type = CarActionTypes.SEARCH;
}

export type CarAction =
	CarSearch;
