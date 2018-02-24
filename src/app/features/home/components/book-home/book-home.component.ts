import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import {
	CoreState, Station, FlightAvailabilitySearchCriteria,
	AppGetTokenData, AvailabilitySearch, AvailabilityLowFareSearch,
	availabilityStations, availabilitySearchCriteria
} from '../../../../core';

@Component({
	selector: 'app-book-home',
	templateUrl: './book-home.component.html',
	styleUrls: ['./book-home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookHomeComponent implements OnInit {
	activeTab$: Observable<number>;
	stations$: Observable<Station[]>;
	searchCriteria$: Observable<FlightAvailabilitySearchCriteria>;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.stations$ = this.store.select(availabilityStations);
		this.searchCriteria$ = this.store.select(availabilitySearchCriteria);
	}

	onSearchClick(criteria: FlightAvailabilitySearchCriteria) {
		this.store.dispatch(new AppGetTokenData({ onlyIfBookingNotNull: true }));
		this.store.dispatch(new AvailabilitySearch(criteria));
		this.store.dispatch(new AvailabilityLowFareSearch(criteria));
	}
}
