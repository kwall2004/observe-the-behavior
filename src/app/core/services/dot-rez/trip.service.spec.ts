import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';

import { TripService } from './trip.service';
import { TripSelectionModel } from '../../models';

describe('TripService', () => {
	let injector: TestBed;
	let service: TripService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				TripService
			]
		});
		injector = getTestBed();
		service = injector.get(TripService);
		httpTestingController = injector.get(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('is created', () => {
		expect(service).toBeTruthy();
	});

	it('sells trip', () => {
		const tripSelection: TripSelectionModel = {
			fareSelections: {
				test: {
					journeyKey: 'test',
					fareAvailabilityKey: 'test'
				}
			},
			adultCount: 2,
			childCount: 0
		};

		service.sellTrip(tripSelection).subscribe();

		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}nk/trip/sell`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual({
			preventOverlap: true,
			keys: [
				{
					journeyKey: 'test',
					fareAvailabilityKey: 'test',
					inventoryControl: 'HoldSpace'
				}
			],
			suppressPassengerAgeValidation: true,
			passengers: {
				types: [
					{
						type: 'ADT',
						count: 2
					}
				]
			},
			currencyCode: 'USD',
			infantCount: 0
		});
	});
});
