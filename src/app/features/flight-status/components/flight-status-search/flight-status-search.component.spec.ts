import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers } from '../../../../core';

import { FlightStatusSearchComponent } from './flight-status-search.component';

import { FormsModule } from '@angular/forms';
import { CollapseModule, TypeaheadModule, BsDatepickerModule, ButtonsModule } from 'ngx-bootstrap';

import { SharedTestingModule } from '../../../../testing';
import { SharedModule } from '../../../../shared';

describe('FlightStatusSearchComponent', () => {
	let component: FlightStatusSearchComponent;
	let fixture: ComponentFixture<FlightStatusSearchComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			declarations: [FlightStatusSearchComponent],
			imports: [
				StoreModule.forRoot(reducers),
				FormsModule,
				CollapseModule.forRoot(),
				TypeaheadModule.forRoot(),
				BsDatepickerModule.forRoot(),
				ButtonsModule.forRoot(),
				SharedModule,
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(FlightStatusSearchComponent);
		component = fixture.componentInstance;
		component.initialSearch = {
			flightNumber: 123,
			departureStation: 'departure station',
			departureCity: 'departure city',
			arrivalStation: 'arrival station',
			arrivalCity: 'arrival city',
			departureDateIndex: 0,
			departureDate: new Date(),
			searchType: 'destination'
		};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
