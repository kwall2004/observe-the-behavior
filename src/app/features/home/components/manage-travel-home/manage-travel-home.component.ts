import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { HomeState, HomeRetrieveBooking } from '../../store';
import { RetrieveBookingRequest } from '../../models';

@Component({
	selector: 'app-manage-travel-home',
	templateUrl: './manage-travel-home.component.html',
	styleUrls: ['./manage-travel-home.component.scss']
})
export class ManageTravelHomeComponent implements OnInit {
	constructor(private store: Store<HomeState>) { }

	ngOnInit() { }

	onRetrieveBooking(request: RetrieveBookingRequest) {
		request = { firstName: 'Hello', lastName: 'There', confirmationCode: 'QHNG4E' };
		this.store.dispatch(new HomeRetrieveBooking(request));
	}
}
