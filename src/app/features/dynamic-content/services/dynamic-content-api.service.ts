import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DynamicContentApiService {
	constructor(private http: HttpClient) { }

	public getContent(): Observable<any> {
		return this.http.get(`${environment.dynamicContentApiUrl}data`);
	}
}
