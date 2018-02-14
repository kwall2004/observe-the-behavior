import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers } from '@app/core';
import * as AppActions from '@app/core/store/actions/app.action';
import * as AvailabilityActions from '@app/core/store/actions/availability.action';

import { BookHomeComponent } from './book-home.component';

@Component({
	selector: 'app-availability-search',
	template: ''
})
class MockAvailabilitySearchComponent {
	@Input() stations: any;
	@Input() origin: any;
	@Input() destination: any;
	@Input() beginDate: any;
}

describe('BookingHomeComponent', () => {
	let component: BookHomeComponent;
	let fixture: ComponentFixture<BookHomeComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockAvailabilitySearchComponent,
				BookHomeComponent
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

		fixture = TestBed.createComponent(BookHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('dispatches set origin action', () => {
		const value = {
			stationCode: 'test',
			shortName: 'test'
		};
		component.onOriginChange(value);
		expect(store.dispatch).toHaveBeenCalledWith(new AvailabilityActions.SetOrigin(value));
	});

	it('dispatches set destination action', () => {
		const value = {
			stationCode: 'test',
			shortName: 'test'
		};
		component.onDestinationChange(value);
		expect(store.dispatch).toHaveBeenCalledWith( new AvailabilityActions.SetDestination(value));
	});

	it('dispatches set begin date action', () => {
		const value = new Date();
		component.onBeginDateChange(value);
		expect(store.dispatch).toHaveBeenCalledWith(new AvailabilityActions.SetBeginDate(value));
	});

	it('dispatches search actions', () => {
		component.onSearchClick();
		expect(store.dispatch).toHaveBeenCalledWith(new AppActions.GetTokenData({ onlyIfBookingNotNull: true }));
		expect(store.dispatch).toHaveBeenCalledWith(new AvailabilityActions.ResetLowFareDate());
		expect(store.dispatch).toHaveBeenCalledWith(new AvailabilityActions.Search());
	});
});
