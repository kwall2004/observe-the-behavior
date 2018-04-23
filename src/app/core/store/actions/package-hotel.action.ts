import { Action } from '@ngrx/store';

import { AvailabilitySearchModel } from '../../models';

export enum PackageHotelActionTypes {
	SEARCH = '[package-hotel] SEARCH',
	ADD_SEARCH_RESULT = '[package-hotel] ADD_SEARCH_RESULT',
	CLEAR_SEARCH_RESULTS = '[package-hotel] CLEAR_SEARCH_RESULTS'
}

export class PackageHotelSearch implements Action {
	readonly type = PackageHotelActionTypes.SEARCH;

	constructor(public payload: AvailabilitySearchModel) { }
}

export class PackageHotelAddSearchResult implements Action {
	readonly type = PackageHotelActionTypes.ADD_SEARCH_RESULT;

	constructor(public payload: any) { }
}

export class PackageHotelClearSearchResults implements Action {
	readonly type = PackageHotelActionTypes.CLEAR_SEARCH_RESULTS;
}

export type PackageHotelAction =
	PackageHotelSearch |
	PackageHotelAddSearchResult |
	PackageHotelClearSearchResults;
