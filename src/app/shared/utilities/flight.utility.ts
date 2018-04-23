function reduceFares(previous, current, fares, payload) {
	previous[current] = {
		...fares[current],
		fareAmount: payload.availability.faresAvailable[current].passengerFares[0].fareAmount
	};

	return previous;
}

function mapJourney(journey, payload) {
	const fares = Object.keys(journey.fares).reduce((previous, current) => reduceFares(previous, current, journey.fares, payload), {});
	const clubFare = Object.values(fares).find((fare: any) => payload.clubFares[fare.fareAvailabilityKey]);
	const standardFare = Object.values(fares).find((fare: any) => !payload.clubFares[fare.fareAvailabilityKey]);
	const lowestFare = Object.values(fares).reduce((previous: any, current: any) => !previous || current.fareAmount < previous.fareAmount ? current : previous, null);

	return {
		...journey,
		fares: fares,
		clubFare: clubFare,
		standardFare: standardFare,
		lowestFare: lowestFare
	};
}

export function mapTrip(trip, payload) {
	const journeys = trip.journeysAvailable.map(journey => mapJourney(journey, payload));
	const lowestFareJourney = journeys.filter(journey => journey.lowestFare).reduce((previous, current) => !previous || current.lowestFare.fareAmount < previous.lowestFare.fareAmount ? current : previous, null);

	return {
		...trip,
		journeysAvailable: journeys,
		lowestFareJourney: lowestFareJourney
	};
}
