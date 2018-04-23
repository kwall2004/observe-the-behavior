export interface ApoAvailabilityRequest {
	originStationCode: string;
	destinationStationCode: string;
	departureDate: Date;
	returnDate: Date;
	adultCount: number;
	childCount: number;
	promoCode: string;
	apoToken: string;
}
