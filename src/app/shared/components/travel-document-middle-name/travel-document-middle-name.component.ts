import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'app-travel-document-middle-name',
	templateUrl: './travel-document-middle-name.component.html',
	styleUrls: ['./travel-document-middle-name.component.scss']
})
export class TravelDocumentMiddleNameComponent implements OnInit {

	public proceedWithoutMiddleName: Subject<boolean>;

	constructor(private modalRef: BsModalRef) { }

	ngOnInit() {
		this.proceedWithoutMiddleName = new Subject();
	}

	edit() {
		this.proceedWithoutMiddleName.next(false); // Allow edit before dispatch
		this.modalRef.hide();
	}

	proceed() {
		this.proceedWithoutMiddleName.next(true); // Go directly to dispatch
		this.modalRef.hide();
	}

	hide() {
		this.modalRef.hide();
	}
}
