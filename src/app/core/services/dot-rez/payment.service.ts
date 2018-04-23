import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { AddPaymentRequestModel } from '../../../features/payment';

@Injectable()
export class PaymentService {
	constructor(private http: HttpClient) { }

	public addPayment(addPaymentRequest: AddPaymentRequestModel): Observable<any> {
		return this.http.post(`${environment.dotRezApiBaseUrl}v2/booking/payments`, {
			amount: addPaymentRequest.amount,
			currencyCode: addPaymentRequest.currencyCode,
			paymentFields: {
				ACCTNO: addPaymentRequest.accountNumber,
				EXPDATE: addPaymentRequest.expiryDate,
				'CC::AccountHolderName': addPaymentRequest.accountHolderName,
				'CC::VerificationCode': addPaymentRequest.verificationCode,
				'Avs::Address1': addPaymentRequest.address
			},
			paymentMethodCode: 'MC',
			installments: 1
		});
	}
}
