import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApoRetrieveBookingRequest, ApoAvailabilityRequest } from '../../../features/optional-services/models';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Injectable()
export class BagotronService {
	constructor(private http: HttpClient, private datePipe: DatePipe) { }

	public getNewBagotronPricing(search: ApoAvailabilityRequest): Observable<any> {
		const body = {
			apoToken: search.apoToken,
			availabilityRequest: {
				passengers: {
					types: []
				},
				criteria: [
					{
						stations: {
							originStationCodes: [search.originStationCode],
							destinationStationCodes: [search.destinationStationCode]
						},
						dates: {
							beginDate: this.datePipe.transform(moment(search.departureDate).toDate(), 'yyyy-MM-dd'),
							endDate: this.datePipe.transform(moment(search.departureDate).toDate(), 'yyyy-MM-dd')
						}
					}
				],
				codes: {
					currency: 'USD',
					promotionalCode: [search.promoCode]
				}
			}
		};

		if (search.adultCount > 0) {
			body.availabilityRequest.passengers.types.push({
				type: 'ADT',
				count: search.adultCount
			});
		}

		if (search.childCount > 0) {
			body.availabilityRequest.passengers.types.push({
				type: 'CHD',
				count: search.childCount
			});
		}

		if (search.returnDate != null && search.returnDate.toString() !== '') {
			body.availabilityRequest.criteria.push({
				stations: {
					originStationCodes: [search.destinationStationCode],
					destinationStationCodes: [search.originStationCode]
				},
				dates: {
					beginDate: this.datePipe.transform(moment(search.returnDate).toDate(), 'yyyy-MM-dd'),
					endDate: this.datePipe.transform(moment(search.returnDate).toDate(), 'yyyy-MM-dd')
				}
			});
		}

		return this.http.post(`${environment.dotRezApiBaseUrl}nk/bagotron`, body);
	}

	public getExistingBagotronPricing(request: ApoRetrieveBookingRequest): Observable<any> {
		const params = new HttpParams({
			fromObject: {
				lastName: request.lastName,
				recordLocator: request.confirmationCode,
				apoToken: request.apoToken
			}
		});

		return this.http.get(`${environment.dotRezApiBaseUrl}nk/bagotron`, { params: params });
	}
}
