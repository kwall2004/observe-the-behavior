import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class TokenService {
	constructor() { }

	public getTokenData(): Observable<any> {
		return of({
			'data': {
				'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkb3RSRVogQVBJIiwianRpIjoiZWRjYjgxODQtZDllOS0wOWFmLWQzNGEtNzdjMzVmZmI3OTI5IiwiaXNzIjoiZG90UkVaIEFQSSJ9.FSssXi6fY9uq5HuOUH-D7QA2Wjt73p-hB-6_z4N-XZg',
				'idleTimeoutInMinutes': 15
			}
		});
	}

	public loginOrKeepAlive(): Observable<any> {
		return of(null);
	}

	public getSessionContext(): Observable<any> {
		return of({ data: { type: 0 }});
	}
}
