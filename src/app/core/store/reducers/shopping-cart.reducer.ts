import { ShoppingCartActionTypes, ShoppingCartAction } from '../actions/shopping-cart.action';

export interface State {
	visitedPages: any;
}

export const INITIAL_STATE: State = {
	visitedPages: {}
};

export function reducer(state = INITIAL_STATE, action: ShoppingCartAction): State {
	switch (action.type) {
		case ShoppingCartActionTypes.SET_VISITED_PAGE:
			return {
				...state,
				visitedPages: {
					...state.visitedPages,
					[action.payload.pageKey]: true
				}
			};

		case ShoppingCartActionTypes.CLEAR_VISITED_PAGES:
			return {
				...state,
				visitedPages: {}
			};
	}

	return state;
}
