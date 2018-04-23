import { TestBed, getTestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';
import * as moment from 'moment';

import { AvailabilityService } from './availability.service';
import { FlightSearchModel } from '../../models';

describe('AvailabilityService', () => {
	let injector: TestBed;
	let service: AvailabilityService;
	let datePipe: DatePipe;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				DatePipe,
				AvailabilityService
			]
		});
		injector = getTestBed();
		service = injector.get(AvailabilityService);
		datePipe = injector.get(DatePipe);
		httpTestingController = injector.get(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('is created', () => {
		expect(service).toBeTruthy();
	});

	it('searches availability', () => {
		const search: FlightSearchModel = {
			index: 1,
			originStationCode: 'test',
			destinationStationCode: 'test',
			date: new Date(2018, 1, 1),
			adultCount: 5,
			childCount: 3
		};

		service.searchAvailability(search).subscribe();

		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}nk/availability/search`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual({
			criteria: [
				{
					stations: {
						originStationCodes: [search.originStationCode],
						destinationStationCodes: [search.destinationStationCode],
						searchDestinationMacs: true,
						searchOriginMacs: true
					},
					dates: {
						beginDate: datePipe.transform(search.date, 'yyyy-MM-dd'),
						endDate: datePipe.transform(search.date, 'yyyy-MM-dd')
					}
				}
			],
			passengers: {
				types: [
					{
						type: 'ADT',
						count: search.adultCount
					},
					{
						type: 'CHD',
						count: search.childCount
					}
				]
			},
			codes: {
				currency: 'USD'
			}
		});
	});

	it('searches low fare', () => {
		const search: FlightSearchModel = {
			index: 1,
			originStationCode: 'test',
			destinationStationCode: 'test',
			date: new Date(2018, 1, 1),
			adultCount: 2,
			childCount: 0
		};

		service.searchAvailabilityLowFare(search).subscribe();

		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}v1/availability/lowfare`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual({
			criteria: [
				{
					originStationCodes: [search.originStationCode],
					destinationStationCodes: [search.destinationStationCode],
					beginDate: datePipe.transform(moment(search.date).subtract(3, 'days').toDate(), 'yyyy-MM-dd'),
					endDate: datePipe.transform(moment(search.date).add(3, 'days').toDate(), 'yyyy-MM-dd'),
				}
			],
			passengers: {
				types: [
					{
						type: 'ADT',
						count: search.adultCount
					}
				]
			},
			codes: {
				currency: 'USD'
			}
		});
	});
});
