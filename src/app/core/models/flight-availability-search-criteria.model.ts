import { Station } from './station.model';

export interface FlightAvailabilitySearchCriteria {
	origin: Station;
	destination: Station;
	beginDate: Date;
	endDate: Date;
	adultCount: number;
	childCount: number;
}
