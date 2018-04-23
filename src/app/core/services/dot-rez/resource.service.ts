import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResourceService {
	constructor(private http: HttpClient) { }

	public getStations(): Observable<any> {
		return this.http.get(`${environment.dotRezApiBaseUrl}v1/resources/Stations?ActiveOnly=true`);
	}

	public getProvinceStates(): Observable<any> {
		return this.http.get(`${environment.dotRezApiBaseUrl}v1/resources/ProvinceStates`);
	}

	public getCountries(): Observable<any> {
		return this.http.get(`${environment.dotRezApiBaseUrl}v1/resources/Countries`);
	}
}
