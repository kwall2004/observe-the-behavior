import { Action } from '@ngrx/store';

import { FlightSearchModel, FlightSearchResultModel, AvailabilitySearchModel, TripSelectionModel } from '../../models';

export enum FlightActionTypes {
	SEARCH = '[flight] SEARCH',
	LOW_FARE_SEARCH = '[flight] LOW_FARE_SEARCH',
	COMBINED_SEARCH = '[flight] COMBINED_SEARCH',
	ADD_SEARCH_RESULT = '[flight] ADD_SEARCH_RESULT',
	ADD_LOW_FARE_SEARCH_RESULT = '[flight] ADD_LOW_FARE_SEARCH_RESULT',
	CLEAR_SEARCH_RESULTS = '[flight] CLEAR_SEARCH_RESULTS',
	SELL_TRIP = '[flight] SELL_TRIP'
}

export class FlightSearch implements Action {
	readonly type = FlightActionTypes.SEARCH;

	constructor(public payload: FlightSearchModel) { }
}

export class FlightLowFareSearch implements Action {
	readonly type = FlightActionTypes.LOW_FARE_SEARCH;

	constructor(public payload: FlightSearchModel) { }
}

export class FlightCombinedSearch implements Action {
	readonly type = FlightActionTypes.COMBINED_SEARCH;

	constructor(public payload: AvailabilitySearchModel) { }
}

export class FlightAddSearchResult implements Action {
	readonly type = FlightActionTypes.ADD_SEARCH_RESULT;

	constructor(public payload: FlightSearchResultModel) { }
}

export class FlightAddLowFareSearchResult implements Action {
	readonly type = FlightActionTypes.ADD_LOW_FARE_SEARCH_RESULT;

	constructor(public payload: FlightSearchResultModel) { }
}

export class FlightClearSearchResults implements Action {
	readonly type = FlightActionTypes.CLEAR_SEARCH_RESULTS;
}

export class FlightSellTrip implements Action {
	readonly type = FlightActionTypes.SELL_TRIP;

	constructor(public payload: TripSelectionModel) { }
}

export type FlightAction =
	FlightSearch |
	FlightLowFareSearch |
	FlightCombinedSearch |
	FlightAddSearchResult |
	FlightAddLowFareSearchResult |
	FlightClearSearchResults |
	FlightSellTrip;
