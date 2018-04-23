import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';

import { BookingService } from './booking.service';

describe('BookingService', () => {
	let injector: TestBed;
	let service: BookingService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				BookingService
			]
		});
		injector = getTestBed();
		service = injector.get(BookingService);
		httpTestingController = injector.get(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('is created', () => {
		expect(service).toBeTruthy();
	});

	it('gets booking', () => {
		service.getBooking().subscribe();

		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}nk/booking`);
		expect(req.request.method).toBe('GET');
	});

	it('commits booking', () => {
		service.commitBooking().subscribe();
		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}v3/booking`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual({});
	});


	it('updates booking', () => {
		service.updateBooking().subscribe();

		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}v3/booking`);
		expect(req.request.method).toBe('PUT');
		expect(req.request.body).toEqual({});
	});
});
