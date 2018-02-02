import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers } from '@app/core';
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
		const action = new AvailabilityActions.SetOrigin(value);
		component.onOriginChange(value);
		expect(store.dispatch).toHaveBeenCalledWith(action);
	});

	it('dispatches set destination action', () => {
		const value = {
			stationCode: 'test',
			shortName: 'test'
		};
		const action = new AvailabilityActions.SetDestination(value);
		component.onDestinationChange(value);
		expect(store.dispatch).toHaveBeenCalledWith(action);
	});

	it('dispatches set begin date action', () => {
		const value = new Date();
		const action = new AvailabilityActions.SetBeginDate(value);
		component.onBeginDateChange(value);
		expect(store.dispatch).toHaveBeenCalledWith(action);
	});

	it('dispatches search actions', () => {
		const action1 = new AvailabilityActions.ResetLowFareDate();
		const action2 = new AvailabilityActions.Search();
		component.onSearchClick();
		expect(store.dispatch).toHaveBeenCalledWith(action1);
		expect(store.dispatch).toHaveBeenCalledWith(action2);
	});
});
