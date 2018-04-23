import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
	templateUrl: './hazmat-acceptance-modal.component.html',
	styleUrls: ['./hazmat-acceptance-modal.component.scss']
})
export class HazmatAcceptanceModalComponent implements OnInit {

	constructor(private modalRef: BsModalRef) { }

	ngOnInit() {
	}

	hideModal() {
		this.modalRef.hide();
	}
}
