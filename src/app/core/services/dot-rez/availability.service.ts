import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

import { FlightSearchModel } from '../../models';

@Injectable()
export class AvailabilityService {
	constructor(
		private http: HttpClient,
		private datePipe: DatePipe
	) { }

	public searchAvailability(search: FlightSearchModel): Observable<any> {
		const body = {
			criteria: [
				{
					stations: {
						originStationCodes: [search.originStationCode],
						destinationStationCodes: [search.destinationStationCode],
						searchDestinationMacs: true,
						searchOriginMacs: true
					},
					dates: {
						beginDate: this.datePipe.transform(search.date, 'yyyy-MM-dd'),
						endDate: this.datePipe.transform(search.date, 'yyyy-MM-dd')
					}
				}
			],
			passengers: {
				types: []
			},
			codes: {
				currency: 'USD'
			}
		};

		if (search.adultCount > 0) {
			body.passengers.types.push({
				type: 'ADT',
				count: search.adultCount
			});
		}

		if (search.childCount > 0) {
			body.passengers.types.push({
				type: 'CHD',
				count: search.childCount
			});
		}

		return this.http.post(`${environment.dotRezApiBaseUrl}nk/availability/search`, body);
	}

	public searchAvailabilityLowFare(search: FlightSearchModel): Observable<any> {
		const body = {
			criteria: [
				{
					originStationCodes: [search.originStationCode],
					destinationStationCodes: [search.destinationStationCode],
					beginDate: this.datePipe.transform(moment(search.date).subtract(3, 'days').toDate(), 'yyyy-MM-dd'),
					endDate: this.datePipe.transform(moment(search.date).add(3, 'days').toDate(), 'yyyy-MM-dd'),
				}
			],
			passengers: {
				types: []
			},
			codes: {
				currency: 'USD'
			}
		};

		if (search.adultCount > 0) {
			body.passengers.types.push({
				type: 'ADT',
				count: search.adultCount
			});
		}

		if (search.childCount > 0) {
			body.passengers.types.push({
				type: 'CHD',
				count: search.childCount
			});
		}

		return this.http.post(`${environment.dotRezApiBaseUrl}v1/availability/lowfare`, body);
	}
}
