import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class SsrService {
	constructor() { }

	public getSsrAvailability(): Observable<any> {
		return of(null);
	}

	public addSsrs(keys: any): Observable<any> {
		console.log(keys);
		return of(null);
	}
}
