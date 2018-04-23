import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-flight-info-summary',
	templateUrl: './flight-info-summary.component.html',
	styleUrls: ['./flight-info-summary.component.scss']
})
export class FlightInfoSummaryComponent implements OnInit {
	@Input() booking;

	constructor() { }

	ngOnInit() { }
}
