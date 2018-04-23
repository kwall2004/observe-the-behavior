import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BagService {
	constructor(private http: HttpClient) { }

	public updateBags(updateBagsRequest: any): Observable<any> {
		return this.http.put(`${environment.dotRezApiBaseUrl}nk/booking/bags`, updateBagsRequest);
	}
}
