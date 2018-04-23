import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { FlightStatusSearchRequestModel } from '../../models';
import { FlightStatusNotificationSubscriptionRequest } from '../../../features/flight-status';

@Injectable()
export class FlightInfoService {
	constructor(private http: HttpClient) { }

	public getFlightStatus(request: FlightStatusSearchRequestModel): Observable<any> {
		return this.http.post(`${environment.dotRezApiBaseUrl}nk/flight-info`, request);
	}

	public getLocalStationTime(stationCode: string): Observable<any> {
		return this.http.get(`${environment.dotRezApiBaseUrl}v1/utilities/stationLocalTime/${stationCode}`);
	}

	public addFlightStatusNotificationSubscription(request: FlightStatusNotificationSubscriptionRequest): Observable<any> {
		return this.http.post(`${environment.dotRezApiBaseUrl}nk/flight-status-notification-subscription`, request);
	}
}
