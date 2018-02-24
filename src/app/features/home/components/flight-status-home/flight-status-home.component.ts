import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { HomeState, HomeCheckStatus } from '../../store';
import { FlightStatusRequest } from '../../models';

@Component({
	selector: 'app-flight-status-home',
	templateUrl: './flight-status-home.component.html',
	styleUrls: ['./flight-status-home.component.scss']
})
export class FlightStatusHomeComponent implements OnInit {
	constructor(private store: Store<HomeState>) { }

	ngOnInit() { }

	onCheckStatus(request: FlightStatusRequest) {
		request = { searchType: 'destination', flightNumber: null, origin: '', destination: '', date: new Date() };
		this.store.dispatch(new HomeCheckStatus(request));
	}
}
