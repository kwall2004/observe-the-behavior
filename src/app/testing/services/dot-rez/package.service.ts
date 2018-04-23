import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class PackageService {
	constructor() { }

	public searchCars(search: any): Observable<any> {
		console.log(search);
		return of(null);
	}

	public searchHotels(search: any): Observable<any> {
		console.log(search);
		return of(null);
	}
}
