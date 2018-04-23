import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ContactService {
	constructor() { }

	public updatePrimaryContact(firstName: string, lastName: string, phoneNumber: string): Observable<any> {
		console.log(firstName, lastName, phoneNumber);
		return of(null);
	}
}
