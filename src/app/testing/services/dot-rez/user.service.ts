import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class UserService {
	constructor() { }

	public validateExistingUser(emailAddress: string): Observable<any> {
		console.log(emailAddress);
		return of(null);
	}

	public getUserPerson(): Observable<any> {
		return of(null);
	}

	public addStoredPayment(request: any) {
		console.log(request);
		return of(null);
	}
}
