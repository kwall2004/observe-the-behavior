import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../../../../material-testing';
import { Component, Input } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers, AppGetTokenData, AvailabilitySearch, AvailabilityLowFareSearch } from '../../../../core';

import { BookHomeComponent } from './book-home.component';

@Component({
	selector: 'app-flight-availability-search',
	template: ''
})
class MockFlightAvailabilitySearchComponent {
	@Input() stations: any;
	@Input() searchCriteria: any;
	@Input() type: any;
	@Input() instance: any;
}

@Component({
	selector: 'app-hotel-availability-search',
	template: ''
})
class MockHotelAvailabilitySearchComponent {
}

@Component({
	selector: 'app-car-availability-search',
	template: ''
})
class MockCarAvailabilitySearchComponent {
}

describe('BookHomeComponent', () => {
	let component: BookHomeComponent;
	let fixture: ComponentFixture<BookHomeComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockFlightAvailabilitySearchComponent,
				MockHotelAvailabilitySearchComponent,
				MockCarAvailabilitySearchComponent,
				BookHomeComponent
			],
			imports: [
				TestingModule,
				StoreModule.forRoot(reducers)
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(BookHomeComponent);
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
		expect(store.dispatch).toHaveBeenCalledWith(new AvailabilityLowFareSearch(criteria));
	});
});
