import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { toArray } from 'rxjs/operators/toArray';
import { SsrService } from '../../services';
import { reducers, CoreState } from '../reducers';
import { OptionEffects } from './option.effect';
import { OptionSetFlex, OptionSetShortCutSecurity, OptionSetCheckIn, OptionSetShortCutBoarding, OptionSaveOptions, AppClearErrors, OptionSaveOptionsSuccess, SsrLoadAvailabilitySuccess, AppAddError } from '../actions';
import { Subject } from 'rxjs/Subject';
import { SharedTestingModule } from '../../../testing';

class MockApiService {

	getSsrAvailability(): Observable<any> {
		throw new Error('getSsrAvailability called');
	}

	addSsrs(_keys: any): Observable<any> {
		return of({});
	}

	constructor(public http: ReplaySubject<any>) { }
}

class MockData {
	get ssrAvailability() {
		return {
			data: {
				'Tkt_IDE4OH4gfn5MQVN_MDMvMzEvMjAxOCAwODoxN35EVFd_MDMvMzEvMjAxOCAxNToxMX5_': {
					'FLX2': {
						'ssrCode': 'FLX2',
						'passengersAvailability': {
							'MCFBRFQ-': {
								'ssrKey': 'MSFNQ0ZCUkZRLSFGTFgyISFEVFchTkshNjM2NTgwNTEyMDAwMDAwMDAwIUxBUyExODghIA--',
								'passengerKey': 'MCFBRFQ-',
								'price': 45
							}
						},
						'ssrType': 0,
						'name': 'Flight Flex',
						'limitPerPassenger': 1,
						'available': null,
						'inventoryControlled': false,
						'seatDependent': false,
						'feeCode': 'FLX2',
						'nest': null,
						'seatRestriction': 1
					},
					'SCPS': {
						'ssrCode': 'SCPS',
						'passengersAvailability': {
							'MCFBRFQ-': {
								'ssrKey': 'MSFNQ0ZCUkZRLSFTQ1BTISFMQVMhTkshNjM2NTc5NjQ4MDAwMDAwMDAwIURUVyExMTEhIA--',
								'passengerKey': 'MCFBRFQ-',
								'price': 5
							}
						},
						'ssrType': 0,
						'name': 'Shortcut Security',
						'limitPerPassenger': 2,
						'available': 96,
						'inventoryControlled': true,
						'seatDependent': false,
						'feeCode': 'SCPS',
						'nest': 'SCPS',
						'seatRestriction': 1
					},
					'SCBD': {
						'ssrCode': 'SCBD',
						'passengersAvailability': {
							'MCFBRFQ-': {
								'ssrKey': 'MSFNQ0ZCUkZRLSFTQ0JEISFMQVMhTkshNjM2NTc5NjQ4MDAwMDAwMDAwIURUVyExMTEhIA--',
								'passengerKey': 'MCFBRFQ-',
								'price': 5.99
							}
						},
						'ssrType': 0,
						'name': 'Shortcut Boarding',
						'limitPerPassenger': 1,
						'available': null,
						'inventoryControlled': false,
						'seatDependent': false,
						'feeCode': 'SCBD',
						'nest': null,
						'seatRestriction': 1
					},
					'BPPT': {
						'ssrCode': 'BPPT',
						'passengersAvailability': {
							'MCFBRFQ-': {
								'ssrKey': 'MSFNQ0ZCUkZRLSFCUFBUISFMQVMhTkshNjM2NTc5NjQ4MDAwMDAwMDAwIURUVyExMTEhIA--',
								'passengerKey': 'MCFBRFQ-',
								'price': 10
							}
						},
						'ssrType': 0,
						'name': 'Boarding Pass Print Charge Ticket Counter',
						'limitPerPassenger': 0,
						'available': null,
						'inventoryControlled': false,
						'seatDependent': false,
						'feeCode': 'BPT',
						'nest': null,
						'seatRestriction': 1
					}
				}
			}
		};
	}
}


@Component({ template: '' })
class MockComponent { }

describe('OptionsEffects', () => {
	let store: Store<CoreState>;
	let mockDataProvider: MockData;
	let actions: ReplaySubject<any>;
	let effects: OptionEffects;
	let http: ReplaySubject<any>;
	let mockapi: MockApiService;

	beforeEach(() => {
		actions = new ReplaySubject(1);
		http = new ReplaySubject(1);
		mockapi = new MockApiService(http);

		TestBed.configureTestingModule({
			declarations: [
				MockComponent
			],
			imports: [
				SharedTestingModule,
				StoreModule.forRoot(reducers),
				RouterTestingModule.withRoutes([
					{
						path: 'book/options',
						component: MockComponent
					}
				])
			],
			providers: [
				OptionEffects,
				provideMockActions(() => actions),
				{
					provide: SsrService,
					useValue: mockapi,
					multi: false
				}
			]
		});

		effects = TestBed.get(OptionEffects);

		store = TestBed.get(Store);

		spyOn(store, 'dispatch').and.callThrough();

		mockDataProvider = new MockData;

		store.dispatch(new SsrLoadAvailabilitySuccess(mockDataProvider.ssrAvailability));
		store.dispatch(new OptionSetFlex(true));
		store.dispatch(new OptionSetShortCutSecurity([true, false]));
		store.dispatch(new OptionSetShortCutBoarding(true));
		store.dispatch(new OptionSetCheckIn('gonzo'));
	});

	it('saves data', () => {
		const stop$ = new Subject();

		effects.saveSelectedOptions$
			.pipe(
				takeUntil(stop$),
				toArray()
			)
			.subscribe(result => {
				expect(result.length).toEqual(2);
				expect(result).toEqual([
					new AppClearErrors(),
					new OptionSaveOptionsSuccess()
				]);
			});

		actions.next(new OptionSaveOptions());

		stop$.next();
	});

	it('handles error response', () => {
		http.error({ text: 'error' });

		actions.next(new OptionSaveOptions());

		const stop$ = new Subject();

		effects.saveSelectedOptions$
			.pipe(
				takeUntil(stop$),
				toArray()
			)
			.subscribe(result => {
				expect(result.length).toEqual(1);
				expect(result).toEqual([
					new AppAddError({ text: 'error' })
				]);
			});
	});
});
