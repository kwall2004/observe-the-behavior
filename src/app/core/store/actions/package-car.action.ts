import { Action } from '@ngrx/store';

import { AvailabilitySearchModel } from '../../models';

export enum PackageCarActionTypes {
	SEARCH = '[package-car] SEARCH',
	ADD_SEARCH_RESULT = '[package-car] ADD_SEARCH_RESULT',
	CLEAR_SEARCH_RESULTS = '[package-car] CLEAR_SEARCH_RESULTS'
}

export class PackageCarSearch implements Action {
	readonly type = PackageCarActionTypes.SEARCH;

	constructor(public payload: AvailabilitySearchModel) { }
}

export class PackageCarAddSearchResult implements Action {
	readonly type = PackageCarActionTypes.ADD_SEARCH_RESULT;

	constructor(public payload: any) { }
}

export class PackageCarClearSearchResults implements Action {
	readonly type = PackageCarActionTypes.CLEAR_SEARCH_RESULTS;
}

export type PackageCarAction =
	PackageCarSearch |
	PackageCarAddSearchResult |
	PackageCarClearSearchResults;
