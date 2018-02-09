import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { DayClick } from '@app/core';

@Component({
	selector: 'app-low-fare',
	templateUrl: './low-fare.component.html',
	styleUrls: ['./low-fare.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LowFareComponent implements OnInit {
	@Input() beginDate: Date;
	@Input() data: any;

	@Output() previousWeekClick = new EventEmitter();
	@Output() nextWeekClick = new EventEmitter();
	@Output() dayClick = new EventEmitter<DayClick>();

	constructor() { }

	ngOnInit() { }

	isSameAsDate(value: string) {
		return moment(value).isSame(this.beginDate);
	}

	onPreviousWeekClick() {
		this.previousWeekClick.emit();
	}

	onNextWeekClick() {
		this.nextWeekClick.emit();
	}

	onDayClick(market) {
		this.dayClick.emit({
			date: moment(market.departureDate).toDate()
		});
	}
}
