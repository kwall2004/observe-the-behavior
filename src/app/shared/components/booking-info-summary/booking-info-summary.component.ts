import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-booking-info-summary',
	templateUrl: './booking-info-summary.component.html',
	styleUrls: ['./booking-info-summary.component.scss']
})
export class BookingInfoSummaryComponent implements OnInit {
	@Input() booking: any;

	constructor() { }

	ngOnInit() { }
}
