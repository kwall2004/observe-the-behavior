import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';

import { CoreState, reducers, bookingState } from '../../../../core';
import { SharedTestingModule } from '../../../../testing';

import { ConfirmationPageComponent } from './confirmation-page.component';

describe('ConfirmationPageComponent', () => {
	let component: ConfirmationPageComponent;
	let fixture: ComponentFixture<ConfirmationPageComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ConfirmationPageComponent
			],
			imports: [
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

		fixture = TestBed.createComponent(ConfirmationPageComponent);
		component = fixture.componentInstance;
		component.booking$ = of({});
		fixture.detectChanges();
	});

	it('is created', () => {
		expect(component).toBeTruthy();
	});

	it('selects state', () => {
		expect(store.select).toHaveBeenCalledWith(bookingState);
	});

});
