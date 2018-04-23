import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { JourneyModel, FareModel, FareSelectionModel } from '../../../../core';

@Component({
	selector: 'app-journey',
	templateUrl: './journey.component.html',
	styleUrls: ['./journey.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyComponent implements OnInit {
	isCollapsed = true;
	duration: string;

	@Input() searchResultIndex: string;
	@Input() journey: JourneyModel;
	@Input() fareValue: string;

	@Output() selectFare = new EventEmitter<FareSelectionModel>();

	constructor() { }

	ngOnInit() {
		this.duration = moment.utc(moment.duration(moment(this.journey.designator.arrival).diff(moment(this.journey.designator.departure))).asMilliseconds()).format('H [h] mm [min]');
	}

	onFareClick(fare: FareModel) {
		this.selectFare.emit({
			journeyKey: this.journey.journeyKey,
			fareAvailabilityKey: fare.fareAvailabilityKey
		});
	}
}
