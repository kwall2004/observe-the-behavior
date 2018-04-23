import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

import { CoreState, HomeRetrieveBooking, RetrieveBookingRequestModel } from '../../../../core';

@Component({
	selector: 'app-manage-travel-home',
	templateUrl: './manage-travel-home.component.html',
	styleUrls: ['./manage-travel-home.component.scss']
})
export class ManageTravelHomeComponent implements OnInit {
	constructor(private store: Store<CoreState>) { }

	request: RetrieveBookingRequestModel;

	ngOnInit() { }

	onRetrieveBooking(form: NgForm) {
		this.request = { lastName: form.value.LastName, confirmationCode: form.value.PNR };
		this.store.dispatch(new HomeRetrieveBooking(this.request));
	}
}
