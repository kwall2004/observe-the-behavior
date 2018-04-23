import { PackageHotelActionTypes, PackageHotelAction } from '../actions/package-hotel.action';

export interface State {
	searchResults: any[];
}

export const INITIAL_STATE: State = {
	searchResults: []
};

export function reducer(state = INITIAL_STATE, action: PackageHotelAction): State {
	switch (action.type) {
		case PackageHotelActionTypes.ADD_SEARCH_RESULT:
			return {
				...state,
				searchResults: state.searchResults.concat(action.payload)
			};

		case PackageHotelActionTypes.CLEAR_SEARCH_RESULTS:
			return {
				...state,
				searchResults: []
			};
	}

	return state;
}
