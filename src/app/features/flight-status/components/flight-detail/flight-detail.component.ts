import { Component, OnInit, Input } from '@angular/core';
import { FlightStatusValue } from '../../models';

@Component({
	selector: 'app-flight-detail',
	templateUrl: './flight-detail.component.html',
	styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit {

	@Input()
	flightInfo;

	@Input()
	rowNumber;

	@Input()
	originalDepartureDate: any;

	flightStatusValue = FlightStatusValue;

	isCollapsed = true;

	constructor() { }

	ngOnInit() { }

	departureHasUpdate(info: any): boolean {
		return info.scheduledDepartureDateTime !== info.estimatedDepartureDateTime ||
			info.scheduledDepartureDateTime !== info.actualDepartureDateTime;
	}

	arrivalHasUpdate(info: any): boolean {
		return info.scheduledArrivalDateTime !== info.estimatedArrivalDateTime ||
			info.scheduledArrivalDateTime !== info.actualArrivalDateTime;
	}

	getFlightStatus(info: any): FlightStatusValue {
		return Object.values(FlightStatusValue).find(e => e === info.legStatus) as FlightStatusValue;
	}

	isNextDay(date: any): boolean {
		const d1 = new Date(date);
		const d2 = new Date(this.originalDepartureDate);
		return d1.valueOf() > d2.valueOf() && d1.getDay() !== d2.getDay();
	}
}
