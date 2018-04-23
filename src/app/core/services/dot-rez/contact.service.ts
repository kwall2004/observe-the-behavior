import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {
	constructor(private http: HttpClient) { }

	public updatePrimaryContact(formPayload: any): Observable<any> {
		return this.http.put(`${environment.dotRezApiBaseUrl}v1/booking/contacts/primary`, {
			phoneNumbers: [
				{
					type: 'Home',
					number: formPayload.phoneNumber
				}
			],
			name: {
				first: formPayload.manageTravelFirstName,
				last: formPayload.manageTravelLastName
			},
			address: {
				lineOne: formPayload.address,
				countryCode: formPayload.countryCode,
				provinceState: formPayload.provinceState,
				city: formPayload.city,
				postalCode: formPayload.postalCode
			},
			emailAddress: formPayload.contactEmailPrimary
		});
	}
}
