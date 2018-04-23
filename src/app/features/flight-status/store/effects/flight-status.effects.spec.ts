import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { takeUntil, toArray } from 'rxjs/operators';

import { FlightInfoService, AppClearErrors, AppAddError, FlightStatusSearchInputModel, StationModel, ResourceSetStations, HomeCheckStatus, CoreState } from '../../../../core';
import { reducers, HomeEffects } from '../../../../core';
import { reducers as flightStatusReducers } from '../reducers';
import { FlightStatusEffects } from './flight-status.effects';
import { FlightStatusGetStatus, FlightStatusGetStatusSuccess, FlightStatusGetStatusError } from '..';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../../shared';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap';

class MockApiService {
	getFlightStatus(): Observable<any> {
		return this.http.asObservable();
	}

	constructor(public http: ReplaySubject<any>) { }
}

class MockData {

	get mockResponse() {
		return [{
			arrivalCity: 'arrival station',
			arrivalStationCode: 'ZZZ',
			departureCity: 'departure station',
			departureStationCode: 'AAA'
		}];
	}

	get searchInput(): FlightStatusSearchInputModel {
		return {
			flightNumber: 123,
			departureDate: new Date(),
			departureDateIndex: 0,
			searchType: 'flightNumber',
			departureStation: '',
			departureCity: '',
			arrivalStation: '',
			arrivalCity: ''
		} as FlightStatusSearchInputModel;
	}

	get stationData(): StationModel[] {
		return [
			{
				stationCode: 'ZZZ',
				shortName: 'arrival station'
			},
			{
				stationCode: 'AAA',
				shortName: 'departure station'
			}
		];
	}
}

@Component({ template: '' })
class MockComponent { }

describe('FlightStatusEffects', () => {
	let store: Store<CoreState>;
	let actions: ReplaySubject<any>;
	let effects: FlightStatusEffects;
	let http: ReplaySubject<any>;
	let mockapi: MockApiService;
	let api: FlightInfoService;
	let data: MockData;

	beforeEach(() => {

		actions = new ReplaySubject(1);
		http = new ReplaySubject(1);
		mockapi = new MockApiService(http);
		data = new MockData();

		TestBed.configureTestingModule({
			declarations: [
				MockComponent
			],
			imports: [
				StoreModule.forRoot(reducers),
				StoreModule.forFeature('flightStatus', flightStatusReducers),
				RouterTestingModule.withRoutes([
					{
						path: 'flight-status',
						component: MockComponent
					}
				]),
				SharedModule,
				ToastrModule.forRoot(),
				ModalModule.forRoot()
			],
			providers: [
				FlightStatusEffects,
				HomeEffects,
				provideMockActions(() => actions),
				{
					provide: FlightInfoService,
					useValue: mockapi,
					multi: false
				}
			]
		});

		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		store.dispatch(new ResourceSetStations(data.stationData));
		store.dispatch(new HomeCheckStatus(data.searchInput));

		effects = TestBed.get(FlightStatusEffects);

		api = TestBed.get(FlightInfoService);

	});

	it('gets data', () => {

		spyOn(api, 'getFlightStatus').and.returnValues(Observable.from([data.mockResponse]));

		actions.next(new FlightStatusGetStatus());

		const stop$ = new Subject();

		effects
			.getData$
			.pipe(
				takeUntil(stop$),
				toArray()
			)
			.subscribe(result => {
				expect(result.length).toEqual(2);
				expect(result).toEqual([
					new AppClearErrors(),
					new FlightStatusGetStatusSuccess(data.mockResponse)
				]);
			});

		stop$.next();
	});

	it('handles error response', () => {
		http.error({ text: 'error' });

		actions.next(new FlightStatusGetStatus());

		const stop$ = new Subject();

		effects
			.getData$
			.pipe(
				takeUntil(stop$),
				toArray()
			)
			.subscribe(result => {
				expect(result.length).toEqual(3);
				expect(result).toEqual([
					new AppClearErrors(),
					new FlightStatusGetStatusError(),
					new AppAddError({ text: 'error' })
				]);
			});

		stop$.next();
	});
});
