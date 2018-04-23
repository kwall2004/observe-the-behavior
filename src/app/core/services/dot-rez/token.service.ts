import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { CredentialsModel } from '../../models';

@Injectable()
export class TokenService {
	constructor(private http: HttpClient) { }

	public getTokenData(): Observable<any> {
		return this.http.post(`${environment.dotRezApiBaseUrl}v1/token`, {});
	}

	public loginOrKeepAlive(credentials?: CredentialsModel): Observable<any> {
		const body = credentials ? credentials : {};
		return this.http.put(`${environment.dotRezApiBaseUrl}v1/token`, body);
	}

	public getSessionContext(): Observable<any> {
		return this.http.get(`${environment.dotRezApiBaseUrl}v1/token`);
	}
}
