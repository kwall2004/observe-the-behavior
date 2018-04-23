import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-contact-info-summary',
	templateUrl: './contact-info-summary.component.html',
	styleUrls: ['./contact-info-summary.component.scss']
})
export class ContactInfoSummaryComponent implements OnInit {
	@Input() contacts: any;
	@Input() edit: boolean;

	constructor() { }

	ngOnInit() {
	}

}
