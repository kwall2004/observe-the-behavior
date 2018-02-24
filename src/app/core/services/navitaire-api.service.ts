import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { RetrieveBookingRequest } from '../../features/home';

import { FlightAvailabilitySearchCriteria } from '../../core';

@Injectable()
export class NavitaireApiService {
	constructor(
		private http: HttpClient,
		private datePipe: DatePipe
	) { }

	public getTokenData(): Observable<any> {
		return this.http.post(`${environment.navitaireApiBaseUrl}v1/token`, {});
	}

	public getStations(): Observable<any> {
		return this.http.get(`${environment.navitaireApiBaseUrl}v1/resources/Stations?ActiveOnly=true`);
	}

	public searchAvailability(criteria: FlightAvailabilitySearchCriteria): Observable<any> {
		const body = {
			'origin': criteria.origin.stationCode,
			'destination': criteria.destination.stationCode,
			'beginDate': this.datePipe.transform(criteria.beginDate, 'yyyy-MM-dd'),
			'endDate': this.datePipe.transform(criteria.endDate, 'yyyy-MM-dd'),
			'passengers': [],
			'currencyCode': 'USD'
		};
		if (criteria.adultCount > 0) {
			body.passengers.push({
				'type': 'ADT',
				'count': criteria.adultCount
			});
		}
		if (criteria.childCount > 0) {
			body.passengers.push({
				'type': 'CHD',
				'count': criteria.childCount
			});
		}
		return this.http.post(`${environment.navitaireApiBaseUrl}v1/availability/search/simple`, body);
	}

	public searchAvailabilityLowFare(criteria: FlightAvailabilitySearchCriteria): Observable<any> {
		const body = {
			'origin': criteria.origin.stationCode,
			'destination': criteria.destination.stationCode,
			'beginDate': this.datePipe.transform(criteria.beginDate, 'yyyy-MM-dd'),
			'passengers': [],
			'currencyCode': 'USD',
			'daysToLeft': 3,
			'daysToRight': 3
		};
		if (criteria.adultCount > 0) {
			body.passengers.push({
				'type': 'ADT',
				'count': criteria.adultCount
			});
		}
		if (criteria.childCount > 0) {
			body.passengers.push({
				'type': 'CHD',
				'count': criteria.childCount
			});
		}
		return this.http.post(`${environment.navitaireApiBaseUrl}v1/availability/lowfare/simple`, body);
	}

	public sellTrip(journeyKey: string, fareKey: string): Observable<any> {
		return this.http.post(`${environment.navitaireApiBaseUrl}v2/trip/sell`, {
			'preventOverlap': true,
			'keys': [
				{
					'journeyKey': journeyKey,
					'fareAvailabilityKey': fareKey,
					'standbyPriorityCode': '',
					'inventoryControl': 'HoldSpace'
				}
			],
			'suppressPassengerAgeValidation': true,
			'passengers': {
				'types': [
					{
						'type': 'ADT',
						'discountCode': '',
						'count': 1
					}
				],
				'residentCountry': ''
			},
			'currencyCode': 'USD',
			'infantCount': 0,
			'promotionCode': '',
			'sourceOrganization': ''
		});
	}

	public savePassenger(passengerKey: string, firstName: string, lastName: string): Observable<any> {
		return this.http.patch(`${environment.navitaireApiBaseUrl}v2/booking/passengers/${passengerKey}`, {
			'passenger': {
				'name': {
					'first': firstName,
					'last': lastName
				}
			}
		});
	}

	public addPrimaryContact(firstName: string, lastName: string, phoneNumber: string): Observable<any> {
		return this.http.post(`${environment.navitaireApiBaseUrl}v1/booking/contacts/primary`, {
			'phoneNumbers': [
				{
					'type': 'Other',
					'number': phoneNumber
				}
			],
			'name': {
				'first': firstName,
				'last': lastName
			}
		});
	}

	public savePrimaryContact(firstName: string, lastName: string, phoneNumber: string): Observable<any> {
		return this.http.put(`${environment.navitaireApiBaseUrl}v1/booking/contacts/primary`, {
			'phoneNumbers': [
				{
					'type': 'Other',
					'number': phoneNumber
				}
			],
			'name': {
				'first': firstName,
				'last': lastName
			}
		});
	}

	public addPayment(accountNumber: string, accountHolderName: string): Observable<any> {
		return this.http.post(`${environment.navitaireApiBaseUrl}v1/booking/payments`, {
			'paymentMethodCode': 'MC',
			'amount': 0.0,
			'paymentFields': {
				'ACCTNO': accountNumber,
				'CC::AccountHolderName': accountHolderName
			},
			'currencyCode': 'USD',
			'installments': 1
		});
	}

	public getBooking(): Observable<any> {
		return this.http.get(`${environment.navitaireApiBaseUrl}v1/booking`);
	}

	public commitBooking(): Observable<any> {
		return this.http.post(`${environment.navitaireApiBaseUrl}v1/booking`, {});
	}

	public retrieveBooking(request: RetrieveBookingRequest): Observable<any> {
		const params = new HttpParams({
			fromObject: {
				lastName: request.lastName,
				firstName: request.firstName,
				recordLocator: request.confirmationCode
			}
		});

		return this.http.get(`${environment.navitaireApiBaseUrl}nl/booking/retrieve`, { params: params });
	}
}
