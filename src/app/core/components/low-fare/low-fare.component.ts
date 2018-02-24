import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { FlightAvailabilitySearchCriteria } from '../../../core';

@Component({
	selector: 'app-low-fare',
	templateUrl: './low-fare.component.html',
	styleUrls: ['./low-fare.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LowFareComponent implements OnInit {
	@Input() searchCriteria: FlightAvailabilitySearchCriteria;
	@Input() lowFareSearchCriteria: FlightAvailabilitySearchCriteria;
	@Input() tripDate: Date;
	@Input() data: any;

	@Output() searchClick = new EventEmitter<FlightAvailabilitySearchCriteria>();
	@Output() lowFareSearchClick = new EventEmitter<FlightAvailabilitySearchCriteria>();

	constructor() { }

	ngOnInit() { }

	isSameAsTripDate(value: string) {
		return moment(value).isSame(this.searchCriteria.beginDate);
	}

	onPreviousWeekClick() {
		this.lowFareSearchClick.emit({
			...this.lowFareSearchCriteria,
			beginDate: moment(this.lowFareSearchCriteria.beginDate).subtract(7, 'days').toDate()
		});
	}

	onNextWeekClick() {
		this.lowFareSearchClick.emit({
			...this.lowFareSearchCriteria,
			beginDate: moment(this.lowFareSearchCriteria.beginDate).add(7, 'days').toDate()
		});
	}

	onDayClick(market) {
		this.searchClick.emit({
			...this.searchCriteria,
			beginDate: moment(market.departureDate).toDate()
		});
	}
}
