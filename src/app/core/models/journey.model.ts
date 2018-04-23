import { FareModel } from './fare.model';

export interface JourneyModel {
	journeyKey: string;
	designator: {
		arrival: string;
		departure: string;
	};
	fares: { [key: string]: FareModel; };
	stops: number;
	clubFare: FareModel;
	standardFare: FareModel;
	lowestFare: FareModel;
}
