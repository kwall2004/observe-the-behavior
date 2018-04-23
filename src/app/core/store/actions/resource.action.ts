import { Action } from '@ngrx/store';

import { StationModel } from '../../models';

export enum ResourceActionTypes {
	GET_REGIONAL_LISTS = '[resource] GET_REGIONAL_LISTS',
	GET_PROVINCE_STATE_LIST = '[resource] GET_PROVINCE_STATE_LIST',
	GET_COUNTRY_LIST = '[resource] GET_COUNTRY_LIST',
	GET_STATIONS = '[resource] GET_STATIONS',
	SET_STATIONS = '[resource] SET_STATIONS'
}

export class ResourceGetRegionalLists implements Action {
	readonly type = ResourceActionTypes.GET_REGIONAL_LISTS;
}

export class ResourceGetProvinceStateList implements Action {
	readonly type = ResourceActionTypes.GET_PROVINCE_STATE_LIST;

	constructor(public payload: any) { }
}

export class ResourceGetCountryList implements Action {
	readonly type = ResourceActionTypes.GET_COUNTRY_LIST;

	constructor(public payload: any) { }
}

export class ResourceGetStations implements Action {
	readonly type = ResourceActionTypes.GET_STATIONS;
}

export class ResourceSetStations implements Action {
	readonly type = ResourceActionTypes.SET_STATIONS;

	constructor(public payload: StationModel[]) { }
}

export type ResourceAction = ResourceGetRegionalLists |
	ResourceGetProvinceStateList |
	ResourceGetCountryList |
	ResourceGetStations |
	ResourceSetStations;
