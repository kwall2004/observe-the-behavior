import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { FareSelectionModel, TripSelectionModel } from '../../models';

@Injectable()
export class TripService {
	constructor(private http: HttpClient) { }

	public sellTrip(tripSelection: TripSelectionModel): Observable<any> {
		const body = {
			preventOverlap: true,
			keys: [],
			suppressPassengerAgeValidation: true,
			passengers: {
				types: []
			},
			currencyCode: 'USD',
			infantCount: 0
		};

		for (const fareSelection of <Array<FareSelectionModel>>Object.values(tripSelection.fareSelections)) {
			body.keys.push({
				journeyKey: fareSelection.journeyKey,
				fareAvailabilityKey: fareSelection.fareAvailabilityKey,
				inventoryControl: 'HoldSpace'
			});
		}

		if (tripSelection.adultCount > 0) {
			body.passengers.types.push({
				type: 'ADT',
				count: tripSelection.adultCount
			});
		}

		if (tripSelection.childCount > 0) {
			body.passengers.types.push({
				type: 'CHD',
				count: tripSelection.childCount
			});
		}

		return this.http.post(`${environment.dotRezApiBaseUrl}nk/trip/sell`, body);
	}
}
