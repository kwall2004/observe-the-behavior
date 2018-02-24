import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Station, FlightAvailabilitySearchCriteria } from '../../../core';

@Component({
	selector: 'app-flight-availability-search',
	templateUrl: './flight-availability-search.component.html',
	styleUrls: ['./flight-availability-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightAvailabilitySearchComponent implements OnInit {
	@Input() stations: Station[];
	@Input() searchCriteria: FlightAvailabilitySearchCriteria;
	@Input() type: string;
	@Input() instance: number;

	@Output() searchClick = new EventEmitter<FlightAvailabilitySearchCriteria>();

	flightType = 'roundTrip';
	vacationType = 'flightCar';

	constructor() { }

	ngOnInit() { }

	onFlightTypeChange(event) {
		this.flightType = event.value;
	}

	onVacationTypeChange(event) {
		this.vacationType = event.value;
	}

	onSearchClick(form) {
		this.searchClick.emit({
			...form.value
		});
	}
}
