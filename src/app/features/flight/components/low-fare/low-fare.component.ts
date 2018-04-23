import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';

import { FlightSearchModel, FlightSearchResultModel } from '../../../../core';

@Component({
	selector: 'app-low-fare',
	templateUrl: './low-fare.component.html',
	styleUrls: ['./low-fare.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LowFareComponent implements OnInit {
	date: moment.Moment = null;
	data: any;

	@Input() search: FlightSearchModel;

	@Input() set results(value: FlightSearchResultModel[]) {
		const result = value.find(r => r.search.index === this.search.index);
		this.data = result ? result.data : null;
	}

	@Output() lowFareSearchClick = new EventEmitter<FlightSearchModel>();
	@Output() searchClick = new EventEmitter<FlightSearchModel>();

	constructor() { }

	ngOnInit() { }

	isSameAsSearchDate(value: string) {
		return moment(value).isSame(this.search.date, 'day');
	}

	onPreviousWeekClick() {
		if (!this.date) {
			this.date = moment(this.search.date);
		}

		this.date = this.date.subtract(7, 'days');

		this.lowFareSearchClick.emit({
			...this.search,
			date: this.date.toDate()
		});
	}

	onNextWeekClick() {
		if (!this.date) {
			this.date = moment(this.search.date);
		}

		this.date = this.date.add(7, 'days');

		this.lowFareSearchClick.emit({
			...this.search,
			date: this.date.toDate()
		});
	}

	onDayClick(market) {
		this.searchClick.emit({
			...this.search,
			date: moment(market.departureDate).toDate()
		});
	}
}
