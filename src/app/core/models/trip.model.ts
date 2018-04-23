import { FlightSearchModel } from './flight-search.model';
import { JourneyModel } from './journey.model';

export interface TripModel {
	search: FlightSearchModel;
	journeysAvailable: JourneyModel[];
	origin: string;
	destination: string;
}
