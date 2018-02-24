import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../../../../material-testing';
import { FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers, BookingAddPayment } from '../../../../core';

import { PaymentPageComponent } from './payment-page.component';

describe('PaymentPageComponent', () => {
	let component: PaymentPageComponent;
	let fixture: ComponentFixture<PaymentPageComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				PaymentPageComponent
			],
			imports: [
				TestingModule,
				FormsModule,
				StoreModule.forRoot(reducers)
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(PaymentPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('dispatches save action', () => {
		const payment = {
			accountNumber: 'test',
			name: 'test'
		};
		const action = new BookingAddPayment({
			accountNumber: payment.accountNumber,
			accountHolderName: payment.name
		});
		const form = {
			value: {
				accountNumber: payment.accountNumber,
				name: payment.name
			}
		};
		component.onSaveClick(form);
		expect(store.dispatch).toHaveBeenCalledWith(action);
	});
});
