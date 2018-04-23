import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { AddStoredPaymentRequestModel } from '../../../features/payment';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) { }

	public validateExistingUser(emailAddress: string): Observable<any> {
		return this.http.get(`${environment.dotRezApiBaseUrl}nk/users/exists?username=${emailAddress}`);
	}

	public getUserPerson(): Observable<any> {
		return this.http.get(`${environment.dotRezApiBaseUrl}v1/user/person`);
	}

	public addStoredPayment(request: AddStoredPaymentRequestModel) {
		return this.http.post(`${environment.dotRezApiBaseUrl}v1/user/person/storedPayments`,
			{
				accountNumber: request.accountNumber,
				paymentMethodType: request.paymentMethodType,
				accountName: request.accountName,
				expiration: request.expiration,
				paymentMethodCode: request.paymentMethodCode,
				default: request.default
			});
	}
}
