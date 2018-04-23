import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers } from '../../../../core';

import { FlightStatusHomeComponent } from './flight-status-home.component';

import { FormsModule } from '@angular/forms';
import { CollapseModule, TypeaheadModule, BsDatepickerModule, ButtonsModule } from 'ngx-bootstrap';

import { SharedTestingModule } from '../../../../testing';
import { SharedModule } from '../../../../shared';

describe('FlightStatusHomeComponent', () => {
	let component: FlightStatusHomeComponent;
	let fixture: ComponentFixture<FlightStatusHomeComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			declarations: [FlightStatusHomeComponent],
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

		fixture = TestBed.createComponent(FlightStatusHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
