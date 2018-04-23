import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import {
	CoreState, reducers
} from '../../../../core';

import { FlightsHotelsPageComponent } from './flights-hotels-page.component';

describe('FlightsHotelsPageComponent', () => {
	let component: FlightsHotelsPageComponent;
	let fixture: ComponentFixture<FlightsHotelsPageComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlightsHotelsPageComponent
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

		fixture = TestBed.createComponent(FlightsHotelsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
