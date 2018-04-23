import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-passenger-info-summary',
	templateUrl: './passenger-info-summary.component.html',
	styleUrls: ['./passenger-info-summary.component.scss']
})
export class PassengerInfoSummaryComponent implements OnInit {
	@Input() booking;
	@Input() bagSelection;
	@Input() edit;

	constructor() { }

	ngOnInit() { }
}
