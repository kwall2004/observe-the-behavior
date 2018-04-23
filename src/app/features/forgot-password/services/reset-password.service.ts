import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ResetPasswordRequest } from '../models';

@Injectable()
export class ResetPasswordService {

	constructor(private http: HttpClient) { }

	public resetPassword(request: ResetPasswordRequest): any {
		return this.http.post(`${environment.dotRezApiBaseUrl}v1/account/password/reset`,
			{
				username: request.username,
				domainCode: request.domainCode,
				alternateIdentifier: request.alternateIdentifier
			});
	}
}
