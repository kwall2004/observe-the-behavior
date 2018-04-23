import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'app-exit-seat-modal',
	templateUrl: './exit-seat-modal.component.html',
	styleUrls: ['./exit-seat-modal.component.scss']
})
export class ExitSeatModalComponent implements OnInit {

	confirmed = new Subject<boolean>();

	constructor(public modalRef: BsModalRef) { }

	ngOnInit() { }

	acceptExitSeat() {
		this.confirmed.next(true);
		this.modalRef.hide();
	}
}
