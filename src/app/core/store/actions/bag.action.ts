import { Action } from '@ngrx/store';
import { BagModifyModel } from '../../models/bag/bag-modify.model';

export enum BagsActionTypes {
	SAVE_BAGS = '[Bag] SAVE_BAGS',
	ADD_BAG = '[bag] ADD_BAG',
	ADD_BAG_ALL_JOURNEYS = '[bag] ADD BAG ALL JOURNEYS',
	SUBTRACT_BAG = '[bag] SUBTRACT BAG',
	SUBTRACT_BAG_ALL_JOURNEYS = '[bag] SUBTRACT BAG ALL JOURNEYS',
	SYNC_JOURNEYS = '[bag] SYNC JOURNEYS',
	UNSYNC_JOURNEYS = '[bag] UNSYNC JOURNEYS',
	SET_SELECTION = '[bag] SET_SELECTION',
	NAVIGATE = '[bag] NAVIGATE'
}

export class BagsSaveBags implements Action {
	readonly type = BagsActionTypes.SAVE_BAGS;
	constructor(public payload: any) { }
}
export class BagAdd implements Action {
	readonly type = BagsActionTypes.ADD_BAG;
	constructor(public payload: BagModifyModel) { }
}
export class BagAddAllJourneys implements Action {
	readonly type = BagsActionTypes.ADD_BAG_ALL_JOURNEYS;
	constructor(public payload: any) { }
}
export class BagSubtract implements Action {
	readonly type = BagsActionTypes.SUBTRACT_BAG;
	constructor(public payload: BagModifyModel) { }
}
export class BagSubtractAllJourneys implements Action {
	readonly type = BagsActionTypes.SUBTRACT_BAG_ALL_JOURNEYS;
	constructor(public payload: any) { }
}
export class BagSyncJourneys implements Action {
	readonly type = BagsActionTypes.SYNC_JOURNEYS;
}
export class BagUnSyncJourneys implements Action {
	readonly type = BagsActionTypes.UNSYNC_JOURNEYS;
}
export class BagSetSelection implements Action {
	readonly type = BagsActionTypes.SET_SELECTION;
	constructor(public payload: any) { }
}
export class BagNavigate implements Action {
	readonly type = BagsActionTypes.NAVIGATE;
}
export type BagsAction =
	BagsSaveBags |
	BagAdd |
	BagAddAllJourneys |
	BagSubtract |
	BagSubtractAllJourneys |
	BagSyncJourneys |
	BagUnSyncJourneys |
	BagSetSelection |
	BagNavigate;

