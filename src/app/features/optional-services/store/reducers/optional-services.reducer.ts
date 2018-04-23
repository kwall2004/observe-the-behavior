import { OptionalServicesActionTypes, OptionalServicesAction } from '../actions/optional-services.action';
import { ApoRetrieveBookingRequest } from '../../models/apo-retrieve-booking.model';
import { ApoAvailabilityRequest } from '../../models';

export interface State {
	apoAvailabilityRequest: ApoAvailabilityRequest;
	apoRetrieveBookingRequest: ApoRetrieveBookingRequest;
	bagotronPricingData: any;
}

const initialState: State = {
	apoAvailabilityRequest: null,
	apoRetrieveBookingRequest: null,
	bagotronPricingData: null
};

export function reducer(state = initialState, action: OptionalServicesAction): State {
	switch (action.type) {
		case OptionalServicesActionTypes.RETRIEVE_NEW_BAGOTRON_PRICING: {
			return {
				...state,
				apoAvailabilityRequest: action.payload
			};
		}

		case OptionalServicesActionTypes.RETRIEVE_EXISTING_BAGOTRON_PRICING: {
			return {
				...state,
				apoRetrieveBookingRequest: action.payload
			};
		}

		case OptionalServicesActionTypes.SET_BAGOTRON_DATA: {
			return {
				...state,
				bagotronPricingData: action.payload
			};
		}

		default: {
			return state;
		}
	}
}
