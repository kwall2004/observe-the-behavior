import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import {
	AvailabilitySetSearchInput, AvailabilityFlightSearch, AvailabilityFlightCarSearch, AvailabilityFlightHotelCarSearch, AvailabilityFlightHotelSearch,
	CoreState,
	resourceStationsState, resourceWorldRegionsState, availabilitySearchInputState
} from '../../../../core/store';
import {
	StationModel, WorldRegionModel, AvailabilitySearchModel
} from '../../../../core/models';


@Component({
	selector: 'app-book-home',
	templateUrl: './book-home.component.html',
	styleUrls: ['./book-home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookHomeComponent implements OnInit {
	stations$: Observable<StationModel[]>;
	worldRegions$: Observable<WorldRegionModel>;
	searchInput$: Observable<AvailabilitySearchModel>;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.stations$ = this.store.select(resourceStationsState);
		this.worldRegions$ = this.store.select(resourceWorldRegionsState);
		this.searchInput$ = this.store.select(availabilitySearchInputState);
	}

	onFlightOnlySearchClick(input: AvailabilitySearchModel) {
		this.store.dispatch(new AvailabilitySetSearchInput(input));
		this.store.dispatch(new AvailabilityFlightSearch(input));
	}

	onPackageSearchClick(input: AvailabilitySearchModel) {
		this.store.dispatch(new AvailabilitySetSearchInput(input));

		switch (input.packageType) {
			case 'flightCar': {
				this.store.dispatch(new AvailabilityFlightCarSearch(input));
				break;
			}

			case 'flightHotel': {
				this.store.dispatch(new AvailabilityFlightHotelSearch(input));
				break;
			}

			case 'flightHotelCar': {
				this.store.dispatch(new AvailabilityFlightHotelCarSearch(input));
				break;
			}
		}
	}
}
