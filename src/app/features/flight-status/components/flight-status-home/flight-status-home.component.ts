import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { FlightStatusState } from '../../store/';
import * as FlightStatusActions from '../../store/actions/flight-status.action';
import { FlightStatusRequest } from '@app/features/flight-status/models/flight-status-request';

@Component({
	selector: 'app-flight-status',
	templateUrl: './flight-status-home.component.html',
	styleUrls: ['./flight-status-home.component.scss']
})
export class FlightStatusHomeComponent implements OnInit {

	constructor(private store: Store<FlightStatusState>) { }

	ngOnInit() {
	}

	onSearchClick(request: FlightStatusRequest) {
		request = { searchType: 'destination', flightNumber: null };
		this.store.dispatch(new FlightStatusActions.GetFlightStatus(request));
	}

}
