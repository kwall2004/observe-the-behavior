import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';

import { FlightInfoService } from './flight-info.service';
import { FlightStatusSearchRequestModel } from '../../models';

describe('FlightInfoService', () => {
	let injector: TestBed;
	let service: FlightInfoService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				FlightInfoService
			]
		});
		injector = getTestBed();
		service = injector.get(FlightInfoService);
		httpTestingController = injector.get(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('is created', () => {
		expect(service).toBeTruthy();
	});

	it('gets flight status', () => {
		const body = {
			departureStation: 'test',
			arrivalStation: 'test',
			flightNumber: 0,
			departureDate: new Date(Date.now())
		} as FlightStatusSearchRequestModel;

		service.getFlightStatus(body).subscribe();

		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}nk/flight-info`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual(body);
	});
});
