import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

import { RetrieveBookingRequestModel } from '../../models';

@Injectable()
export class BookingService {
	constructor(private http: HttpClient) { }

	public getBooking(): Observable<any> {
		return this.http.get(`${environment.dotRezApiBaseUrl}nk/booking`);
	}

	public commitBooking(): Observable<any> {
		return this.http.post(`${environment.dotRezApiBaseUrl}v3/booking`, {});
	}

	public updateBooking(): Observable<any> {
		return this.http.put(`${environment.dotRezApiBaseUrl}v3/booking`, {});
	}

	public resetBooking(): Observable<any> {
		return this.http.delete(`${environment.dotRezApiBaseUrl}v1/booking/reset`, {});
	}

	public retrieveBooking(request: RetrieveBookingRequestModel): Observable<any> {
		const params = new HttpParams({
			fromObject: {
				lastName: request.lastName,
				recordLocator: request.confirmationCode
			}
		});

		return this.http.get(`${environment.dotRezApiBaseUrl}nk/booking/retrieve`, { params: params });
	}
}
