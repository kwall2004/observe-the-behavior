import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
	templateUrl: './confirmation-code-modal.component.html',
	styleUrls: ['./confirmation-code-modal.component.scss']
})
export class ConfirmationCodeModalComponent implements OnInit {
	tab: number;

	constructor(private modalRef: BsModalRef) { }

	ngOnInit() {
		this.tab = 1;
	}

	hide() {
		this.modalRef.hide();
	}

}
