import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class FlightInfoService {
	constructor() { }

	public getFlightStatus(request: any): Observable<any> {
		console.log(request);
		return of(null);
	}
}
