import { Action } from '@ngrx/store';

export enum ShoppingCartActionTypes {
	SET_VISITED_PAGE = '[shopping-cart] SET_VISITED_PAGE',
	CLEAR_VISITED_PAGES = '[shopping-cart] CLEAR_VISITED_PAGES'
}

export class ShoppingCartSetVisitedPage implements Action {
	readonly type = ShoppingCartActionTypes.SET_VISITED_PAGE;

	constructor(public payload: { pageKey: string }) { }
}

export class ShoppingCartClearVisitedPages implements Action {
	readonly type = ShoppingCartActionTypes.CLEAR_VISITED_PAGES;
}

export type ShoppingCartAction =
	ShoppingCartSetVisitedPage |
	ShoppingCartClearVisitedPages;
