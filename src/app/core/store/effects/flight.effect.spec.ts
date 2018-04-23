import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { cold } from 'jasmine-marbles';

import { AppClearErrors, AppAddError, BookingSetData, SsrLoadAvailability } from '../actions';
import { AvailabilityService, TripService, LocalStorageService } from '../../services';
import { FlightEffects } from './flight.effect';
import { FlightSearch, FlightAddSearchResult, FlightLowFareSearch, FlightAddLowFareSearchResult, FlightSellTrip } from '../actions';
import { FlightSearchModel } from '../../models';
import { MockLocalStorageService } from '../../../testing';


class MockApiService {
	searchAvailability() { }
	searchAvailabilityLowFare() { }
	sellTrip() { }
}

@Component({
	template: ''
})
class MockComponent { }

describe('FlightEffects', () => {
	let effects: FlightEffects;
	let actions: Observable<any>;
	let availabilityService: AvailabilityService;
	let tripService: TripService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockComponent
			],
			imports: [
				RouterTestingModule.withRoutes([
					{
						path: 'book',
						component: MockComponent
					},
					{
						path: 'book/passenger',
						component: MockComponent
					}
				])
			],
			providers: [
				FlightEffects,
				{
					provide: AvailabilityService,
					useClass: MockApiService
				},
				{
					provide: TripService,
					useClass: MockApiService
				},
				{
					provide: LocalStorageService,
					useClass: MockLocalStorageService
				},
				provideMockActions(() => actions)
			],
		});

		effects = TestBed.get(FlightEffects);
		availabilityService = TestBed.get(AvailabilityService);
		tripService = TestBed.get(TripService);
	});

	it('searches', () => {
		const payload = {
			availability: {
				trips: [
					{
						journeysAvailable: [
							{
								fares: {
									test: {
										fareAvailabilityKey: 'test'
									}
								}
							}
						]
					}
				],
				faresAvailable: {
					test: {
						passengerFares: [
							{
								fareAvailabilityKey: 'test',
								fareAmount: 10
							}
						]
					}
				}
			},
			clubFares: {
				test: true
			}
		};
		const search: FlightSearchModel = {
			index: 1,
			originStationCode: 'test',
			destinationStationCode: 'test',
			date: new Date(2018, 1, 1),
			adultCount: 1,
			childCount: 0
		};

		spyOn(availabilityService, 'searchAvailability').and.returnValue(of(payload));

		const marbles = {
			a: new FlightSearch(search),
			b: new FlightAddSearchResult({
				search: search,
				data: {
					availability: {
						trips: [
							{
								journeysAvailable: [
									{
										fares: {
											test: {
												fareAvailabilityKey: 'test',
												fareAmount: 10
											}
										},
										clubFare: {
											fareAvailabilityKey: 'test',
											fareAmount: 10
										},
										lowestFare: {
											fareAvailabilityKey: 'test',
											fareAmount: 10
										},
										standardFare: undefined
									}
								],
								lowestFareJourney: {
									fares: {
										test: {
											fareAvailabilityKey: 'test',
											fareAmount: 10
										}
									},
									clubFare: {
										fareAvailabilityKey: 'test',
										fareAmount: 10
									},
									lowestFare: {
										fareAvailabilityKey: 'test',
										fareAmount: 10
									},
									standardFare: undefined
								}
							}
						],
						faresAvailable: payload.availability.faresAvailable
					},
					clubFares: payload.clubFares
				}
			})
		};

		actions = cold('a', marbles);
		const expected = cold('b', marbles);

		expect(effects.search$).toBeObservable(expected);
	});

	it('handles search error', () => {
		const http = new ReplaySubject(1);
		spyOn(availabilityService, 'searchAvailability').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		const marbles = {
			a: new FlightSearch({
				index: 1,
				originStationCode: null,
				destinationStationCode: null,
				date: null,
				adultCount: 1,
				childCount: 0
			}),
			b: new AppAddError({ text: 'test' })
		};

		actions = cold('a', marbles);
		const expected = cold('b', marbles);

		expect(effects.search$).toBeObservable(expected);
	});

	it('searches low fare', () => {
		const search: FlightSearchModel = {
			index: 1,
			originStationCode: 'test',
			destinationStationCode: 'test',
			date: new Date(2018, 1, 1),
			adultCount: 1,
			childCount: 0
		};

		spyOn(availabilityService, 'searchAvailabilityLowFare').and.returnValue(of({ data: 'test' }));

		const marbles = {
			a: new FlightLowFareSearch(search),
			b: new FlightAddLowFareSearchResult({
				search: search,
				data: 'test'
			})
		};

		actions = cold('a', marbles);
		const expected = cold('b', marbles);

		expect(effects.lowFareSearch$).toBeObservable(expected);
	});

	it('handles low fare search error', () => {
		const http = new ReplaySubject(1);
		spyOn(availabilityService, 'searchAvailabilityLowFare').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		const marbles = {
			a: new FlightLowFareSearch({
				index: 1,
				originStationCode: null,
				destinationStationCode: null,
				date: null,
				adultCount: 1,
				childCount: 1
			}),
			b: new AppAddError({ text: 'test' })
		};

		actions = cold('a', marbles);
		const expected = cold('b', marbles);

		expect(effects.lowFareSearch$).toBeObservable(expected);
	});

	it('sells trip', () => {
		spyOn(tripService, 'sellTrip').and.returnValue(of({ data: 'test' }));

		const marbles = {
			a: new FlightSellTrip({
				fareSelections: {
					test: {
						journeyKey: 'test',
						fareAvailabilityKey: 'test'
					}
				},
				adultCount: 1,
				childCount: 0
			}),
			b: new AppClearErrors(),
			c: new BookingSetData('test'),
			d: new SsrLoadAvailability()
		};

		actions = cold('a', marbles);
		const expected = cold('(bcd)', marbles);

		expect(effects.sellTrip$).toBeObservable(expected);
	});

	it('handles sell trip error', () => {
		const http = new ReplaySubject(1);
		spyOn(tripService, 'sellTrip').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		const marbles = {
			a: new FlightSellTrip({
				fareSelections: {
					test: {
						journeyKey: 'test',
						fareAvailabilityKey: 'test'
					}
				},
				adultCount: 1,
				childCount: 0
			}),
			b: new AppClearErrors(),
			c: new AppAddError({ text: 'test' })
		};

		actions = cold('a', marbles);
		const expected = cold('(bc)', marbles);

		expect(effects.sellTrip$).toBeObservable(expected);
	});
});
