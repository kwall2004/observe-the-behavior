export interface FlightStatusSearchInputModel {
	flightNumber: Number;
	departureStation: string;
	departureCity: string;
	arrivalStation: string;
	arrivalCity: string;
	departureDateIndex: number;
	departureDate: Date;
	searchType: string;
}
