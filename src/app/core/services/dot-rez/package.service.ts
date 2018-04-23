import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AvailabilitySearchModel } from '../../models';

@Injectable()
export class PackageService {
	constructor(
		private http: HttpClient,
		private datePipe: DatePipe
	) { }

	public searchCars(search: AvailabilitySearchModel): Observable<any> {
		const body = {
			originCode: search.criteria.originStationCode,
			destinationCode: search.criteria.destinationStationCode,
			departureDateTime: this.datePipe.transform(search.criteria.dates[0], 'yyyy-MM-dd'),
			returnDateTime: this.datePipe.transform(search.criteria.dates[1], 'yyyy-MM-dd'),
			passengers: [],
			promoCode: search.criteria.promoCode
		};

		body.passengers = body.passengers.concat(Array(search.criteria.adultCount).fill({
			type: 'ADT'
		}));

		body.passengers = body.passengers.concat(Array(search.criteria.childCount).fill({
			type: 'CHD'
		}));

		return this.http.post(`${environment.dotRezApiBaseUrl}nk/package/car/search`, body);
	}

	public searchHotels(search: AvailabilitySearchModel): Observable<any> {
		const body = {
			originCode: search.criteria.originStationCode,
			destinationCode: search.criteria.destinationStationCode,
			departureDateTime: this.datePipe.transform(search.criteria.dates[0], 'yyyy-MM-dd'),
			returnDateTime: this.datePipe.transform(search.criteria.dates[1], 'yyyy-MM-dd'),
			passengers: [],
			hotelRooms: search.hotelRooms,
			promoCode: search.criteria.promoCode
		};

		body.passengers = body.passengers.concat(Array(search.criteria.adultCount).fill({
			type: 'ADT'
		}));

		body.passengers = body.passengers.concat(Array(search.criteria.childCount).fill({
			type: 'CHD'
		}));

		return this.http.post(`${environment.dotRezApiBaseUrl}nk/package/hotel/search`, body);
	}
}
