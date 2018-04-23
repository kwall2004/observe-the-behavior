import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class PassengerService {
	constructor() { }

	public savePassenger(passengerKey: string, firstName: string, lastName: string): Observable<any> {
		console.log(passengerKey, firstName, lastName);
		return of(null);
	}

	public savePassengersAndPrimaryContact(formPayload: any): Observable<any> {
		console.log(formPayload);
		return of(null);
	}

	public addPassengerSSR(formPayload: any): Observable<any> {
		console.log(formPayload);
		return of(null);
	}
}
