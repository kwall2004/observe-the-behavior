import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

import { Journey, Trip, SellTripClick } from '../../../core';

@Component({
	selector: 'app-journey-list',
	templateUrl: './journey-list.component.html',
	styleUrls: ['./journey-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyListComponent implements OnInit {
	@Input() trip: Trip;

	@Output() sellTripClick = new EventEmitter<SellTripClick>();

	constructor() { }

	ngOnInit() { }

	getFareKeys(journey: Journey) {
		return Object.keys(journey.fares);
	}

	onSellClick(journeyKey: string, fareKey: string) {
		this.sellTripClick.emit({
			journeyKey: journeyKey,
			fareKey: fareKey
		});
	}
}
