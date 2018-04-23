export interface AvailabilitySearchCriteriaModel {
	originStationCode: string;
	destinationStationCode: string;
	dates: Date[];
	adultCount: number;
	childCount: number;
	promoCode: string;
}
