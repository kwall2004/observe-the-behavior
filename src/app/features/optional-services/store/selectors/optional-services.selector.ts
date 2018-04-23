import { createSelector } from '@ngrx/store';
import { getOptionalServicesState } from '../../../optional-services/store';

export const bagotronDataState = createSelector(
	getOptionalServicesState,
	(state) => state && state.optionalServices.bagotronPricingData
);
