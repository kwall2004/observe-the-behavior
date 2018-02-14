import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { FlightStatusState, reducers } from '@app/features/flight-status/store';
import * as FlightStatusActions from '@app/features/flight-status/store/actions/flight-status.action';

import { FlightStatusHomeComponent } from './flight-status-home.component';

describe('FlightStatusComponent', () => {
	let component: FlightStatusHomeComponent;
	let fixture: ComponentFixture<FlightStatusHomeComponent>;
	let store: Store<FlightStatusState>;


	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FlightStatusHomeComponent],
			imports: [
				StoreModule.forRoot(reducers)
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(FlightStatusHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
