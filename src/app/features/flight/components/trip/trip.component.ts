import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

import { TripModel, FlightSearchResultModel, FlightSearchModel, FareSelectionModel } from '../../../../core';

@Component({
	selector: 'app-trip',
	templateUrl: './trip.component.html',
	styleUrls: ['./trip.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripComponent implements OnInit {
	@Input() trip: TripModel;
	@Input() searchResult: FlightSearchResultModel;
	@Input() searchResultIndex: string;
	@Input() lowFareSearchResults: FlightSearchResultModel[];

	@Output() lowFareSearchClick = new EventEmitter<FlightSearchModel>();
	@Output() searchClick = new EventEmitter<FlightSearchModel>();
	@Output() selectFare = new EventEmitter<FareSelectionModel>();

	constructor() { }

	ngOnInit() { }

	onLowFareSearchClick(event: FlightSearchModel) {
		this.lowFareSearchClick.emit(event);
	}

	onSearchClick(event: FlightSearchModel) {
		this.searchClick.emit(event);
	}

	onSelectFare(event: FareSelectionModel) {
		this.selectFare.emit(event);
	}
}
