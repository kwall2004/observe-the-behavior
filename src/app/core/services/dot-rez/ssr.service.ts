import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SsrService {
	constructor(private http: HttpClient) { }

	public getSsrAvailability(): Observable<any> {
		return this.http.post(`${environment.dotRezApiBaseUrl}nk/booking/ssrs/journey-availability`, { 'currencyCode': 'USD' });
	}

	public addSsrs(keys: any): Observable<any> {
		return this.http.post(`${environment.dotRezApiBaseUrl}v1/booking/ssrs`, { keys: keys, currencyCode: 'USD' });
	}
}
