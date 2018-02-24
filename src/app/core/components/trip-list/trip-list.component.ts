import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import { Station, SellTripClick, FlightAvailabilitySearchCriteria } from '../../models';
import {
	CoreState,
	AppGetTokenData, AvailabilitySearch, AvailabilityLowFareSearch, AvailabilitySellTrip,
	availabilityStations, availabilitySearchCriteria, availabilityLowFareSearchCriteria, availability, availabilityLowFare
} from '../../store';

@Component({
	selector: 'app-trip-list',
	templateUrl: './trip-list.component.html',
	styleUrls: ['./trip-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripListComponent implements OnInit {
	stations$: Observable<Station[]>;
	searchCriteria$: Observable<FlightAvailabilitySearchCriteria>;
	lowFareSearchCriteria$: Observable<FlightAvailabilitySearchCriteria>;
	data$: Observable<any>;
	lowFareData$: Observable<any>;

	newSearch = false;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.stations$ = this.store.select(availabilityStations);
		this.searchCriteria$ = this.store.select(availabilitySearchCriteria);
		this.lowFareSearchCriteria$ = this.store.select(availabilityLowFareSearchCriteria);
		this.data$ = this.store.select(availability);
		this.lowFareData$ = this.store.select(availabilityLowFare);
	}

	onNewSearchClick() {
		this.newSearch = true;
	}

	onSearchClick(criteria: FlightAvailabilitySearchCriteria) {
		this.store.dispatch(new AppGetTokenData({ onlyIfBookingNotNull: true }));
		this.store.dispatch(new AvailabilitySearch(criteria));
	}

	onLowFareSearchClick(criteria: FlightAvailabilitySearchCriteria) {
		this.store.dispatch(new AvailabilityLowFareSearch(criteria));
	}

	onSellTripClick(event: SellTripClick) {
		this.store.dispatch(new AvailabilitySellTrip(event));
	}
}
