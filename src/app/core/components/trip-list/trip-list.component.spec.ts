import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers, Station, SellTripClick, AppGetTokenData, AvailabilitySearch, AvailabilityLowFareSearch, AvailabilitySellTrip } from '../../../core';

import { TripListComponent } from './trip-list.component';

@Component({
	selector: 'app-flight-availability-search',
	template: ''
})
class MockAvailabilitySearchComponent {
	@Input() stations: any;
	@Input() searchCriteria: any;
}

@Component({
	selector: 'app-low-fare',
	template: ''
})
class MockLowFareComponent {
	@Input() searchCriteria: any;
	@Input() lowFareSearchCriteria: any;
	@Input() tripDate: Date;
	@Input() data: any;
}

@Component({
	selector: 'app-journey-list',
	template: ''
})
class MockJourneyListComponent {
	@Input() trip: any;
}

describe('TripListComponent', () => {
	let component: TripListComponent;
	let fixture: ComponentFixture<TripListComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockAvailabilitySearchComponent,
				MockLowFareComponent,
				MockJourneyListComponent,
				TripListComponent
			],
			imports: [
				StoreModule.forRoot(reducers)
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(TripListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('dispatches search actions', () => {
		const criteria = {
			origin: {
				stationCode: 'test',
				shortName: 'test'
			},
			destination: {
				stationCode: 'test',
				shortName: 'test'
			},
			beginDate: new Date(),
			endDate: new Date(),
			adultCount: 2,
			childCount: 0
		};

		component.onSearchClick(criteria);
		expect(store.dispatch).toHaveBeenCalledWith(new AppGetTokenData({ onlyIfBookingNotNull: true }));
		expect(store.dispatch).toHaveBeenCalledWith(new AvailabilitySearch(criteria));
	});

	it('dispatches low fare search action', () => {
		const criteria = {
			origin: {
				stationCode: 'test',
				shortName: 'test'
			},
			destination: {
				stationCode: 'test',
				shortName: 'test'
			},
			beginDate: new Date(),
			endDate: new Date(),
			adultCount: 2,
			childCount: 0
		};

		component.onLowFareSearchClick(criteria);
		expect(store.dispatch).toHaveBeenCalledWith(new AvailabilityLowFareSearch(criteria));
	});

	it('dispatches sell trip action', () => {
		const sellTripClick: SellTripClick = {
			journeyKey: 'test',
			fareKey: 'test'
		};

		component.onSellTripClick(sellTripClick);
		expect(store.dispatch).toHaveBeenCalledWith(new AvailabilitySellTrip(sellTripClick));
	});
});
