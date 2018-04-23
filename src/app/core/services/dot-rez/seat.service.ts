import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SeatService {
	constructor(private http: HttpClient) { }

	public getSeatMaps(): Observable<any> {
		return this.http.get(`${environment.dotRezApiBaseUrl}nk/booking/seatmaps`);
	}

	public updateSeats(updateSeatRequest): Observable<any> {
		return this.http.put(`${environment.dotRezApiBaseUrl}nk/passengers/seats`, { passengerSeatRequests: updateSeatRequest });
	}
}
