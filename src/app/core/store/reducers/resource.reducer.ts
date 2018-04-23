import { ResourceActionTypes, ResourceAction } from '../actions/resource.action';
import { StationModel } from '../../models';

export interface State {
	wheelchairType: any[];
	stations: StationModel[];
	provinceStates: any[];
	countries: any[];
	data: any;
}

const initialState = {
	wheelchairType: [
		{ id: 'hasWheelchairBatteryPoweredWetCell', name: 'Battery Powered Wet Cell Battery' },
		{ id: 'hasWheelchairBatteryPoweredDryGelCell', name: 'Battery Powered Dry/Gel Cell Battery' },
		{ id: 'hasWheelchairManuallyPowered', name: 'Manually Powered' },
	],
	stations: [],
	provinceStates: [],
	countries: [],
	data: null,
};

export function reducer(state = initialState, action: ResourceAction): State {
	switch (action.type) {
		case ResourceActionTypes.SET_STATIONS:
			return {
				...state,
				stations: action.payload
			};

		case ResourceActionTypes.GET_PROVINCE_STATE_LIST:
			return {
				...state,
				provinceStates: action.payload
			};

		case ResourceActionTypes.GET_COUNTRY_LIST:
			return {
				...state,
				countries: action.payload
			};

	}
	return state;
}
