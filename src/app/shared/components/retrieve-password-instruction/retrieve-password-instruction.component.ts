import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
	selector: 'app-retrieve-password-instruction',
	templateUrl: './retrieve-password-instruction.component.html',
	styleUrls: ['./retrieve-password-instruction.component.scss']
})
export class RetrievePasswordInstructionComponent implements OnInit {

	constructor(private modalRef: BsModalRef) { }

	ngOnInit() {
	}
	hideModal() {
		this.modalRef.hide();
	}
}
