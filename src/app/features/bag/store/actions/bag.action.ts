import { Action } from '@ngrx/store';

export enum BagsActionTypes {
	SAVE_BAGS = '[Bag] SAVE_BAGS'
}

export class BagsSaveBags implements Action {
	readonly type = BagsActionTypes.SAVE_BAGS;

	constructor() { }
}

export type BagsAction =
	BagsSaveBags;

