import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxBootstrapTestingModule, SharedTestingModule } from '../../../../testing';
import { FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers, BookingAddPayment, bookingState, BookingSetData } from '../../../../core';

import { PaymentPageComponent } from './payment-page.component';
import { of } from 'rxjs/observable/of';

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
				FormsModule,
				NgxBootstrapTestingModule,
				StoreModule.forRoot(reducers),
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		store.dispatch<BookingSetData>(new BookingSetData({ contacts: { P: { address: {} } }, breakdown: {} }));
		spyOn(store, 'dispatch').and.callThrough();
		spyOn(store, 'select').and.callThrough();

		fixture = TestBed.createComponent(PaymentPageComponent);
		component = fixture.componentInstance;
		component.booking$ = of({ contacts: { P: { address: {} } } });
		fixture.detectChanges();
	});

	it('is created', () => {
		expect(component).toBeTruthy();
	});

	it('selects state', () => {
		expect(store.select).toHaveBeenCalledWith(bookingState);
	});

	it('dispatches actions', () => {
		const expectedAddress = 'test address';
		const expectedSaveCard = false;
		component.saveCard = false;
		component.contactAddress = 'test address';
		const payment = {
			accountNumber: 'test',
			name: 'test',
			amount: 0,
			currencyCode: 'USD',
			expiryDate: '01/01/2020',
			verificationCode: 'test'
		};
		const form = {
			value: {
				accountNumber: payment.accountNumber,
				nameOnCard: payment.name,
				amount: payment.amount,
				currencycode: payment.currencyCode,
				expirationMonth: '01',
				expirationYear: '2020',
				securityCode: payment.verificationCode,
				address: component.contactAddress,
				saveCard: component.saveCard
			}
		};
		component.onSaveClick(form);
		expect(store.dispatch).toHaveBeenCalledWith(new BookingAddPayment({
			accountNumber: payment.accountNumber,
			accountHolderName: payment.name,
			amount: payment.amount,
			currencyCode: payment.currencyCode,
			expiryDate: payment.expiryDate,
			verificationCode: payment.verificationCode,
			saveCard: expectedSaveCard,
			address: expectedAddress
		}));
	});
});
