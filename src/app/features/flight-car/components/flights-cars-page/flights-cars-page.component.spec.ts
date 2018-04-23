import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import {
	CoreState, reducers
} from '../../../../core';

import { FlightsCarsPageComponent } from './flights-cars-page.component';

describe('FlightsCarsPageComponent', () => {
	let component: FlightsCarsPageComponent;
	let fixture: ComponentFixture<FlightsCarsPageComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlightsCarsPageComponent
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

		fixture = TestBed.createComponent(FlightsCarsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
