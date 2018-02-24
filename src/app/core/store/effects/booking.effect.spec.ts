import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { StoreModule, Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

import { CoreState, reducers } from '../reducers';

import { BookingEffects } from './booking.effect';
import {
	AppClearErrors, AppAddError,
	BookingSavePassenger, BookingSavePrimaryContact, BookingAddPayment, BookingGetData, BookingSetData, BookingCommit
} from '../actions';
import { NavitaireApiService } from '../../services';

class MockApiService {
	savePassenger() { }
	addPrimaryContact() { }
	savePrimaryContact() { }
	addPayment() { }
	getBooking() { }
	commitBooking() { }
}

@Component({
	template: ''
})
class MockComponent { }

describe('BookingEffects', () => {
	let effects: BookingEffects;
	let actions: ReplaySubject<any>;
	let store: Store<CoreState>;
	let apiService: NavitaireApiService;
	let location: Location;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockComponent
			],
			imports: [
				RouterTestingModule.withRoutes([
					{
						path: 'book/bags',
						component: MockComponent
					},
					{
						path: 'confirmation',
						component: MockComponent
					}
				]),
				StoreModule.forRoot(reducers)
			],
			providers: [
				BookingEffects,
				{
					provide: NavitaireApiService,
					useClass: MockApiService
				},
				provideMockActions(() => actions)
			],
		});

		location = TestBed.get(Location);

		effects = TestBed.get(BookingEffects);

		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		apiService = TestBed.get(NavitaireApiService);
	});

	it('should save passenger', fakeAsync(() => {
		store.dispatch(new BookingSetData({
			passengers: {
				test: {
					passengerKey: 'test'
				}
			},
			contacts: {}
		}));

		spyOn(apiService, 'savePassenger').and.returnValue(of(
			{
				data: null
			}
		));

		actions = new ReplaySubject(1);
		actions.next(new BookingSavePassenger({
			name: {
				first: 'test',
				last: 'test'
			}
		}));

		effects.savePassenger$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(result).toEqual(new BookingGetData());
			tick();
			expect(location.path()).toBe('/book/bags');
		});
	}));

	it('should handle save passenger error', () => {
		store.dispatch(new BookingSetData({
			passengers: {
				test: {
					passengerKey: 'test'
				}
			},
			contacts: {}
		}));

		const http = new ReplaySubject(1);
		spyOn(apiService, 'savePassenger').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		actions = new ReplaySubject(1);
		actions.next(new BookingSavePassenger({
			name: {
				first: 'test',
				last: 'test'
			}
		}));

		effects.savePassenger$.subscribe();
		expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
		expect(store.dispatch).toHaveBeenCalledWith(new AppAddError({ text: 'test' }));
	});

	it('should add primary contact', fakeAsync(() => {
		store.dispatch(new BookingSetData({
			contacts: {
				'': 'test'
			}
		}));

		spyOn(apiService, 'addPrimaryContact').and.returnValue(of(
			{
				data: null
			}
		));

		actions = new ReplaySubject(1);
		actions.next(new BookingSavePrimaryContact({
			name: {
				first: 'test',
				last: 'test'
			},
			phoneNumbers: [
				{
					number: 'test'
				}
			]
		}));

		effects.savePrimaryContact$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(result).toEqual(new BookingGetData());
			tick();
			expect(location.path()).toBe('/book/bags');
		});
	}));

	it('should handle add primary contact error', () => {
		store.dispatch(new BookingSetData({
			contacts: {
				'': 'test'
			}
		}));

		const http = new ReplaySubject(1);
		spyOn(apiService, 'addPrimaryContact').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		actions = new ReplaySubject(1);
		actions.next(new BookingSavePrimaryContact({
			name: {
				first: 'test',
				last: 'test'
			},
			phoneNumbers: [
				{
					number: 'test'
				}
			]
		}));

		effects.savePrimaryContact$.subscribe();
		expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
		expect(store.dispatch).toHaveBeenCalledWith(new AppAddError({ text: 'test' }));
	});

	it('should save primary contact', fakeAsync(() => {
		store.dispatch(new BookingSetData({
			contacts: {
				'test': 'test'
			}
		}));

		spyOn(apiService, 'savePrimaryContact').and.returnValue(of(
			{
				data: null
			}
		));

		actions = new ReplaySubject(1);
		actions.next(new BookingSavePrimaryContact({
			name: {
				first: 'test',
				last: 'test'
			},
			phoneNumbers: [
				{
					number: 'test'
				}
			]
		}));

		effects.savePrimaryContact$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(result).toEqual(new BookingGetData());
			tick();
			expect(location.path()).toBe('/book/bags');
		});
	}));

	it('should handle save primary contact error', () => {
		store.dispatch(new BookingSetData({
			contacts: {
				'test': 'test'
			}
		}));

		const http = new ReplaySubject(1);
		spyOn(apiService, 'savePrimaryContact').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		actions = new ReplaySubject(1);
		actions.next(new BookingSavePrimaryContact({
			name: {
				first: 'test',
				last: 'test'
			},
			phoneNumbers: [
				{
					number: 'test'
				}
			]
		}));

		effects.savePrimaryContact$.subscribe();
		expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
		expect(store.dispatch).toHaveBeenCalledWith(new AppAddError({ text: 'test' }));
	});

	it('should add payment', fakeAsync(() => {
		spyOn(apiService, 'addPayment').and.returnValue(of(
			{
				data: null
			}
		));

		actions = new ReplaySubject(1);
		actions.next(new BookingAddPayment({
			accountNumber: 'test',
			accountHolderName: 'test'
		}));

		effects.addPayment$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(result).toEqual(new BookingGetData());
			tick();
			expect(location.path()).toBe('/confirmation');
		});
	}));

	it('should handle add payment error', () => {
		const http = new ReplaySubject(1);
		spyOn(apiService, 'addPayment').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		actions = new ReplaySubject(1);
		actions.next(new BookingAddPayment({
			accountNumber: 'test',
			accountHolderName: 'test'
		}));

		effects.addPayment$.subscribe();
		expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
		expect(store.dispatch).toHaveBeenCalledWith(new AppAddError({ text: 'test' }));
	});

	it('should get data', () => {
		spyOn(apiService, 'getBooking').and.returnValue(of(
			{
				data: 'test'
			}
		));

		actions = new ReplaySubject(1);
		actions.next(new BookingGetData());

		effects.getData$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(result).toEqual(new BookingSetData('test'));
		});
	});

	it('should handle get data error', () => {
		const http = new ReplaySubject(1);
		spyOn(apiService, 'getBooking').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		actions = new ReplaySubject(1);
		actions.next(new BookingGetData());

		effects.getData$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(store.dispatch).toHaveBeenCalledWith(new AppAddError({ text: 'test' }));
			expect(result).toEqual(new BookingSetData(null));
		});
	});

	it('should commit', () => {
		spyOn(apiService, 'commitBooking').and.returnValue(of(
			{
				data: 'test'
			}
		));

		actions = new ReplaySubject(1);
		actions.next(new BookingCommit());

		effects.commit$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(result).toEqual(new BookingGetData());
		});
	});

	it('should handle commit error', () => {
		const http = new ReplaySubject(1);
		spyOn(apiService, 'commitBooking').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		actions = new ReplaySubject(1);
		actions.next(new BookingCommit());

		effects.commit$.subscribe();
		expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
		expect(store.dispatch).toHaveBeenCalledWith(new AppAddError({ text: 'test' }));
	});
});
