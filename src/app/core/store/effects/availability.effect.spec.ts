import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

import { CoreState, reducers } from '../reducers';

import { AvailabilityEffects } from './availability.effect';
import {
	AppClearErrors, AppAddError,
	AvailabilityGetStations, AvailabilitySetStations, AvailabilitySearch, AvailabilitySetData, AvailabilityLowFareSearch, AvailabilitySetLowFareData, AvailabilitySellTrip,
	BookingSetData
} from '../actions';
import { NavitaireApiService } from '../../services';

class MockApiService {
	getStations() { }
	searchAvailability() { }
	searchAvailabilityLowFare() { }
	sellTrip() { }
}

describe('AvailabilityEffects', () => {
	let effects: AvailabilityEffects;
	let actions: ReplaySubject<any>;
	let store: Store<CoreState>;
	let apiService: NavitaireApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				StoreModule.forRoot(reducers)
			],
			providers: [
				AvailabilityEffects,
				{
					provide: NavitaireApiService,
					useClass: MockApiService
				},
				provideMockActions(() => actions)
			],
		});

		effects = TestBed.get(AvailabilityEffects);

		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		apiService = TestBed.get(NavitaireApiService);
	});

	it('should get stations', () => {
		spyOn(apiService, 'getStations').and.returnValue(of(
			{
				data: [
					{
						stationCode: 'test',
						shortName: 'test'
					}
				]
			}
		));

		actions = new ReplaySubject(1);
		actions.next(new AvailabilityGetStations());

		effects.getStations$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(result).toEqual(new AvailabilitySetStations([
				{
					stationCode: 'test',
					shortName: 'test'
				}
			]));
		});
	});

	it('should handle get stations error', () => {
		const http = new ReplaySubject(1);
		spyOn(apiService, 'getStations').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		actions = new ReplaySubject(1);
		actions.next(new AvailabilityGetStations());

		effects.getStations$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(store.dispatch).toHaveBeenCalledWith(new AppAddError({ text: 'test' }));
			expect(result).toEqual(new AvailabilitySetStations(null));
		});
	});

	it('should search', () => {
		spyOn(apiService, 'searchAvailability').and.returnValue(of({ data: 'test' }));

		actions = new ReplaySubject(1);
		actions.next(new AvailabilitySearch({
			origin: {
				stationCode: 'test',
				shortName: 'test'
			},
			destination: {
				stationCode: 'test',
				shortName: 'test'
			},
			'beginDate': new Date(),
			'endDate': new Date(),
			'adultCount': 1,
			'childCount': 0
		}));

		effects.search$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(result).toEqual(new AvailabilitySetData('test'));
		});
	});

	it('should handle search error', () => {
		const http = new ReplaySubject(1);
		spyOn(apiService, 'searchAvailability').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		actions = new ReplaySubject(1);
		actions.next(new AvailabilitySearch(null));

		effects.search$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(store.dispatch).toHaveBeenCalledWith(new AppAddError({ text: 'test' }));
			expect(result).toEqual(new AvailabilitySetData(null));
		});
	});

	it('should low fare search', () => {
		spyOn(apiService, 'searchAvailabilityLowFare').and.returnValue(of({ data: 'test' }));

		actions = new ReplaySubject(1);
		actions.next(new AvailabilityLowFareSearch({
			origin: {
				stationCode: 'test',
				shortName: 'test'
			},
			destination: {
				stationCode: 'test',
				shortName: 'test'
			},
			'beginDate': new Date(),
			'endDate': new Date(),
			'adultCount': 1,
			'childCount': 0
		}));

		effects.searchLowFare$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(result).toEqual(new AvailabilitySetLowFareData('test'));
		});
	});

	it('should handle low fare search error', () => {
		const http = new ReplaySubject(1);
		spyOn(apiService, 'searchAvailabilityLowFare').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		actions = new ReplaySubject(1);
		actions.next(new AvailabilityLowFareSearch(null));

		effects.searchLowFare$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(store.dispatch).toHaveBeenCalledWith(new AppAddError({ text: 'test' }));
			expect(result).toEqual(new AvailabilitySetLowFareData(null));
		});
	});

	it('should sell trip', () => {
		spyOn(apiService, 'sellTrip').and.returnValue(of({ data: 'test' }));

		actions = new ReplaySubject(1);
		actions.next(new AvailabilitySellTrip({
			journeyKey: 'test',
			fareKey: 'test'
		}));

		effects.sellTrip$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(result).toEqual(new BookingSetData('test'));
		});
	});

	it('should handle sell trip error', () => {
		const http = new ReplaySubject(1);
		spyOn(apiService, 'sellTrip').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		actions = new ReplaySubject(1);
		actions.next(new AvailabilitySellTrip({
			journeyKey: 'test',
			fareKey: 'test'
		}));

		effects.sellTrip$.subscribe();
		expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
		expect(store.dispatch).toHaveBeenCalledWith(new AppAddError({ text: 'test' }));
	});
});
