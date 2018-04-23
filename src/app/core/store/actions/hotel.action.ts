import { Action } from '@ngrx/store';

export enum HotelActionTypes {
	SEARCH = '[hotel] SEARCH'
}

export class HotelSearch implements Action {
	readonly type = HotelActionTypes.SEARCH;
}

export type HotelAction =
	HotelSearch;
