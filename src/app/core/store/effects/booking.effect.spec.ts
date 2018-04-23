import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { StoreModule, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { cold } from 'jasmine-marbles';

import { CoreState, reducers } from '../reducers';
import { BsModalService } from 'ngx-bootstrap';
import { BookingEffects } from './booking.effect';
import {
	AppClearErrors, AppAddError,
	BookingUpdatePrimaryContact, BookingAddPayment, BookingGetData, BookingSetData, BookingCommit, BookingCommitSuccess, BookingUpdate
} from '../actions';
import { BookingService, PassengerService, ContactService, PaymentService } from '../../services';

class MockApiService {
	savePassenger() { }
	updatePrimaryContact() { }
	addPayment() { }
	getBooking() { }
	commitBooking() { }
}

@Component({
	template: ''
})
class MockComponent { }
class MockModal { }

describe('BookingEffects', () => {
	let effects: BookingEffects;
	let actions: Observable<any>;
	let store: Store<CoreState>;
	let bookingService: BookingService;
	let contactService: ContactService;
	let paymentService: PaymentService;
	let location: Location;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockComponent
			],
			imports: [
				RouterTestingModule.withRoutes([
					{
						path: 'my-trips/reservation-summary',
						component: MockComponent
					},
					{
						path: 'book/confirmation',
						component: MockComponent
					}
				]),
				StoreModule.forRoot(reducers)
			],
			providers: [
				BookingEffects,
				{
					provide: BookingService,
					useClass: MockApiService
				},
				{
					provide: PassengerService,
					useClass: MockApiService
				},
				{
					provide: ContactService,
					useClass: MockApiService
				},
				{
					provide: PaymentService,
					useClass: MockApiService
				},
				{
					provide: BsModalService,
					useClass: MockModal
				},
				provideMockActions(() => actions)
			],
		});

		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		location = TestBed.get(Location);
		effects = TestBed.get(BookingEffects);
		bookingService = TestBed.get(BookingService);
		contactService = TestBed.get(ContactService);
		paymentService = TestBed.get(PaymentService);
	});

	it('updates contact', fakeAsync(() => {
		store.dispatch(new BookingSetData({
			contacts: {
				'': 'test'
			}
		}));

		spyOn(contactService, 'updatePrimaryContact').and.returnValue(of(
			{
				data: null
			}
		));

		const marbles = {
			a: new BookingUpdatePrimaryContact({
				name: {
					first: 'test',
					last: 'test'
				},
				phoneNumbers: [
					{
						number: 'test'
					}
				]
			}),
			b: new AppClearErrors(),
			c: new BookingUpdate()
		};

		actions = cold('a', marbles);
		const expected = cold('(bc)', marbles);

		expect(effects.updatePrimaryContact$).toBeObservable(expected);
	}));

	it('handles update primary contact error', () => {
		store.dispatch(new BookingSetData({
			contacts: {
				'': 'test'
			}
		}));

		const http = new ReplaySubject(1);
		spyOn(contactService, 'updatePrimaryContact').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		const marbles = {
			a: new BookingUpdatePrimaryContact({
				name: {
					first: 'test',
					last: 'test'
				},
				phoneNumbers: [
					{
						number: 'test'
					}
				]
			}),
			b: new AppClearErrors(),
			c: new AppAddError({ text: 'test' })
		};

		actions = cold('a', marbles);
		const expected = cold('(bc)', marbles);

		expect(effects.updatePrimaryContact$).toBeObservable(expected);
	});

	it('adds payment', fakeAsync(() => {
		spyOn(paymentService, 'addPayment').and.returnValue(of(
			{
				data: null
			}
		));

		const marbles = {
			a: new BookingAddPayment({
				accountNumber: 'test',
				accountHolderName: 'test',
				amount: 10,
				currencyCode: 'test',
				expiryDate: '01/01/2020',
				verificationCode: 'test',
				saveCard: false,
				address: 'test address'
			}),
			b: new AppClearErrors(),
			c: new BookingCommit()
		};

		actions = cold('a', marbles);
		const expected = cold('(bc)', marbles);

		expect(effects.addPayment$).toBeObservable(expected);
	}));

	it('handles add payment error', () => {
		const http = new ReplaySubject(1);
		spyOn(paymentService, 'addPayment').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		const marbles = {
			a: new BookingAddPayment({
				accountNumber: 'test',
				accountHolderName: 'test',
				amount: 10,
				currencyCode: 'test',
				expiryDate: '01/01/2020',
				verificationCode: 'test',
				saveCard: false,
				address: 'test address'
			}),
			b: new AppClearErrors(),
			c: new AppAddError({ text: 'test' })
		};

		actions = cold('a', marbles);
		const expected = cold('(bc)', marbles);

		expect(effects.addPayment$).toBeObservable(expected);
	});

	it('gets data', () => {
		spyOn(bookingService, 'getBooking').and.returnValue(of(
			{
				data: 'test'
			}
		));

		const marbles = {
			a: new BookingGetData(),
			b: new AppClearErrors(),
			c: new BookingSetData('test')
		};

		actions = cold('a', marbles);
		const expected = cold('(bc)', marbles);

		expect(effects.getData$).toBeObservable(expected);
	});

	it('handles get data error', () => {
		const http = new ReplaySubject(1);
		spyOn(bookingService, 'getBooking').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		const marbles = {
			a: new BookingGetData(),
			b: new AppClearErrors(),
			c: new AppAddError({ text: 'test' })
		};

		actions = cold('a', marbles);
		const expected = cold('(bc)', marbles);

		expect(effects.getData$).toBeObservable(expected);
	});

	it('commits', () => {
		spyOn(bookingService, 'commitBooking').and.returnValue(of(
			{
				data: 'test'
			}
		));

		const marbles = {
			a: new BookingCommit(),
			b: new AppClearErrors(),
			c: new BookingCommitSuccess()
		};

		actions = cold('a', marbles);
		const expected = cold('(bc)', marbles);

		expect(effects.commit$).toBeObservable(expected);
	});

	it('handles commit error', () => {
		const http = new ReplaySubject(1);
		spyOn(bookingService, 'commitBooking').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		const marbles = {
			a: new BookingCommit(),
			b: new AppClearErrors(),
			c: new AppAddError({ text: 'test' })
		};

		actions = cold('a', marbles);
		const expected = cold('(bc)', marbles);

		expect(effects.commit$).toBeObservable(expected);
	});

	it('handles commit success', fakeAsync(() => {
		const marbles = {
			a: new BookingCommitSuccess(),
			b: new BookingGetData()
		};

		actions = cold('a', marbles);
		const expected = cold('b', marbles);

		effects.commitSuccess$.subscribe(() => {
			tick();
			expect(location.path()).toBe('/book/confirmation');
		});

		expect(effects.commitSuccess$).toBeObservable(expected);
	}));
});
