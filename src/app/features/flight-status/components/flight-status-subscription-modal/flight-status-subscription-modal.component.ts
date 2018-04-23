import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
	selector: 'app-flight-status-subscription-modal',
	templateUrl: './flight-status-subscription-modal.component.html',
	styleUrls: ['./flight-status-subscription-modal.component.scss']
})
export class FlightStatusSubscriptionModalComponent implements OnInit {

	succeeded: boolean;

	emailAddress: string;

	flightNumber: string;

	destination: string;

	flightDate: string;

	constructor(private modalRef: BsModalRef) { }

	ngOnInit() {
	}

	hide() {
		this.modalRef.hide();
	}

}
