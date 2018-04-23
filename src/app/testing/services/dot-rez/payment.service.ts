import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class PaymentService {
	constructor() { }

	public addPayment(accountNumber: string, accountHolderName: string): Observable<any> {
		console.log(accountNumber, accountHolderName);
		return of(null);
	}
}
