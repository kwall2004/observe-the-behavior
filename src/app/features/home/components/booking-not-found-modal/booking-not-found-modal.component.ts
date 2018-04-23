import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
	templateUrl: './booking-not-found-modal.component.html',
	styleUrls: ['./booking-not-found-modal.component.scss']
})
export class BookingNotFoundModalComponent implements OnInit {

	constructor(private modalRef: BsModalRef) { }

	ngOnInit() { }

	hide() {
		this.modalRef.hide();
	}

}
