import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
	selector: 'app-branded-modal',
	templateUrl: './branded-modal.component.html',
	styleUrls: ['./branded-modal.component.scss']
})
export class BrandedModelComponent implements OnInit {
	@Input() headerText: string;
	@Input() modalRef: BsModalRef;

	constructor() { }

	ngOnInit() {
	}

}
