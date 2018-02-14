export interface FlightStatusRequest {
	searchType: string;
	flightNumber: Number;
	origin: string;
	destination: string;
	date: Date;
}
