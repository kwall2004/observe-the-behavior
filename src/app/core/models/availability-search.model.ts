import { AvailabilitySearchCriteriaModel } from './availability-search-criteria.model';

export interface AvailabilitySearchModel {
	flightType: string;
	packageType: string;
	criteria: AvailabilitySearchCriteriaModel;
	hotelRooms: number;
	driverAge: number;
}
