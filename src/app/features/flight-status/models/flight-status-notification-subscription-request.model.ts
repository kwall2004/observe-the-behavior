export interface FlightStatusNotificationSubscriptionRequest {
	arrivalStation: string;
	arrivalStationCode: string;
	departureStation: string;
	departureStationCode: string;
	subscriptionEmail: string;
	flightNumber: string;
	departureDate: Date;
	estimatedArrivalDateTime: Date;
}
