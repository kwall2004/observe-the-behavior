import { Action } from '@ngrx/store';
import { ApoRetrieveBookingRequest } from '../../models/apo-retrieve-booking.model';
import { ApoAvailabilityRequest } from '../../models';

export enum OptionalServicesActionTypes {
	RETRIEVE_NEW_BAGOTRON_PRICING = '[optional-services] Retrieve Bagatron Pricing For New Trip',
	RETRIEVE_EXISTING_BAGOTRON_PRICING = '[optional-services] Retrieve Bagotron Pricing For Existing Trip',
	SET_BAGOTRON_DATA = '[optional-services] Set Bagotron Data'
}

export class OptionalServicesRetrieveNewBagotronPricing implements Action {
	readonly type = OptionalServicesActionTypes.RETRIEVE_NEW_BAGOTRON_PRICING;

	constructor(public payload: ApoAvailabilityRequest) { }
}

export class OptionalServicesRetrieveExistingBagotronPricing implements Action {
	readonly type = OptionalServicesActionTypes.RETRIEVE_EXISTING_BAGOTRON_PRICING;

	constructor(public payload: ApoRetrieveBookingRequest) { }
}

export class BagotronSetData implements Action {
	readonly type = OptionalServicesActionTypes.SET_BAGOTRON_DATA;

	constructor(public payload: any) { }
}

export type OptionalServicesAction =
	OptionalServicesRetrieveNewBagotronPricing |
	OptionalServicesRetrieveExistingBagotronPricing |
	BagotronSetData;
