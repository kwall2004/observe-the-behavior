import { PackageCarActionTypes, PackageCarAction } from '../actions/package-car.action';

export interface State {
	searchResults: any[];
}

export const INITIAL_STATE: State = {
	searchResults: []
};

export function reducer(state = INITIAL_STATE, action: PackageCarAction): State {
	switch (action.type) {
		case PackageCarActionTypes.ADD_SEARCH_RESULT:
			return {
				...state,
				searchResults: state.searchResults.concat(action.payload)
			};

		case PackageCarActionTypes.CLEAR_SEARCH_RESULTS:
			return {
				...state,
				searchResults: []
			};
	}

	return state;
}
