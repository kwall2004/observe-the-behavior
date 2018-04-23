import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxBootstrapTestingModule, SharedTestingModule } from '../../../../testing';
import { Component } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';

import {
	CoreState, reducers,
	AvailabilitySearchModel,
	AvailabilityFlightSearch,
	availabilitySearchInputState, resourceStationsState
} from '../../../../core';
import { BookHomeComponent } from './book-home.component';


@Component({
	selector: 'app-hotel-search',
	template: ''
})
class MockHotelSearchComponent { }

@Component({
	selector: 'app-car-search',
	template: ''
})
class MockCarSearchComponent { }

@Component({
	template: ''
})
class MockComponent { }

describe('BookHomeComponent', () => {
	let component: BookHomeComponent;
	let fixture: ComponentFixture<BookHomeComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockHotelSearchComponent,
				MockCarSearchComponent,
				MockComponent,
				BookHomeComponent
			],
			imports: [
				NgxBootstrapTestingModule,
				RouterTestingModule.withRoutes([
					{
						path: 'book',
						component: MockComponent
					}
				]),
				StoreModule.forRoot(reducers),
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();
		spyOn(store, 'select').and.callThrough();

		fixture = TestBed.createComponent(BookHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('is created', () => {
		expect(component).toBeTruthy();
	});

	it('selects state', () => {
		expect(store.select).toHaveBeenCalledWith(resourceStationsState);
		expect(store.select).toHaveBeenCalledWith(availabilitySearchInputState);
	});

	it('dispatches actions', () => {
		const input: AvailabilitySearchModel = {
			flightType: 'roundTrip',
			packageType: 'flightCar',
			criteria: {
				originStationCode: 'test',
				destinationStationCode: 'test',
				dates: [
					new Date(2018, 1, 1),
					new Date(2018, 2, 2)
				],
				adultCount: 2,
				childCount: 0,
				promoCode: null
			},
			driverAge: 0,
			hotelRooms: 0
		};

		component.onFlightOnlySearchClick(input);
		expect(store.dispatch).toHaveBeenCalledWith(new AvailabilityFlightSearch(input));
	});
});
