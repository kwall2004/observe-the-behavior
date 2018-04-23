import { FlightActionTypes, FlightAction } from '../actions/flight.action';
import { FlightSearchResultModel } from '../../models';

export interface State {
	searchResults: FlightSearchResultModel[];
	lowFareSearchResults: FlightSearchResultModel[];
}

export const INITIAL_STATE: State = {
	searchResults: [],
	lowFareSearchResults: []
};

export function reducer(state = INITIAL_STATE, action: FlightAction): State {
	let index: number;

	switch (action.type) {
		case FlightActionTypes.ADD_SEARCH_RESULT:
			index = state.searchResults.findIndex(result => result.search.index === action.payload.search.index);

			if (index > -1) {
				return {
					...state,
					searchResults: [...state.searchResults.slice(0, index), action.payload, ...state.searchResults.slice(index + 1)]
				};
			} else {
				return {
					...state,
					searchResults: [...state.searchResults.slice(0, action.payload.search.index), action.payload, ...state.searchResults.slice(action.payload.search.index)]
				};
			}

		case FlightActionTypes.ADD_LOW_FARE_SEARCH_RESULT:
			index = state.lowFareSearchResults.findIndex(result => result.search.index === action.payload.search.index);

			if (index > -1) {
				return {
					...state,
					lowFareSearchResults: [...state.lowFareSearchResults.slice(0, index), action.payload, ...state.lowFareSearchResults.slice(index + 1)]
				};
			} else {
				return {
					...state,
					lowFareSearchResults: [...state.lowFareSearchResults.slice(0, action.payload.search.index), action.payload, ...state.lowFareSearchResults.slice(action.payload.search.index)]
				};
			}

		case FlightActionTypes.CLEAR_SEARCH_RESULTS:
			return {
				...state,
				searchResults: [],
				lowFareSearchResults: []
			};
	}

	return state;
}
