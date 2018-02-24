import { TestBed, getTestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';

import { NavitaireApiService } from './navitaire-api.service';

describe('NavitaireApiService', () => {
	let injector: TestBed;
	let service: NavitaireApiService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				DatePipe,
				NavitaireApiService
			]
		});
		injector = getTestBed();
		service = injector.get(NavitaireApiService);
		httpTestingController = injector.get(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('gets stations', () => {
		service.getStations().subscribe();

		const req = httpTestingController.expectOne(`${environment.navitaireApiBaseUrl}v1/resources/Stations?ActiveOnly=true`);
		expect(req.request.method).toBe('GET');
	});

	it('searches availability', () => {
		service.searchAvailability({
			origin: {
				stationCode: 'test',
				shortName: 'test'
			},
			destination: {
				stationCode: 'test',
				shortName: 'test'
			},
			beginDate: new Date(new Date(2018, 0, 29)),
			endDate: new Date(new Date(2018, 1, 1)),
			adultCount: 2,
			childCount: 0
		}).subscribe();

		const req = httpTestingController.expectOne(`${environment.navitaireApiBaseUrl}v1/availability/search/simple`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual({
			'origin': 'test',
			'destination': 'test',
			'beginDate': '2018-01-29',
			'endDate': '2018-02-01',
			'passengers': [
				{
					'type': 'ADT',
					'count': 2
				}
			],
			'currencyCode': 'USD'
		});
	});

	it('searches low fare', () => {
		service.searchAvailabilityLowFare({
			origin: {
				stationCode: 'test',
				shortName: 'test'
			},
			destination: {
				stationCode: 'test',
				shortName: 'test'
			},
			beginDate: new Date(2018, 0, 29),
			endDate: null,
			adultCount: 2,
			childCount: 0
		}).subscribe();

		const req = httpTestingController.expectOne(`${environment.navitaireApiBaseUrl}v1/availability/lowfare/simple`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual({
			'origin': 'test',
			'destination': 'test',
			'beginDate': '2018-01-29',
			'passengers': [
				{
					'type': 'ADT',
					'count': 2
				}
			],
			'currencyCode': 'USD',
			'daysToLeft': 3,
			'daysToRight': 3
		});
	});

	it('sells trip', () => {
		service.sellTrip('test', 'test').subscribe();

		const req = httpTestingController.expectOne(`${environment.navitaireApiBaseUrl}v2/trip/sell`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual({
			'preventOverlap': true,
			'keys': [
				{
					'journeyKey': 'test',
					'fareAvailabilityKey': 'test',
					'standbyPriorityCode': '',
					'inventoryControl': 'HoldSpace'
				}
			],
			'suppressPassengerAgeValidation': true,
			'passengers': {
				'types': [
					{
						'type': 'ADT',
						'discountCode': '',
						'count': 1
					}
				],
				'residentCountry': ''
			},
			'currencyCode': 'USD',
			'infantCount': 0,
			'promotionCode': '',
			'sourceOrganization': ''
		});
	});

	it('saves passenger', () => {
		service.savePassenger('test', 'test', 'test').subscribe();

		const req = httpTestingController.expectOne(`${environment.navitaireApiBaseUrl}v2/booking/passengers/test`);
		expect(req.request.method).toBe('PATCH');
		expect(req.request.body).toEqual({
			'passenger': {
				'name': {
					'first': 'test',
					'last': 'test'
				}
			}
		});
	});

	it('adds primary contact', () => {
		service.addPrimaryContact('test', 'test', 'test').subscribe();

		const req = httpTestingController.expectOne(`${environment.navitaireApiBaseUrl}v1/booking/contacts/primary`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual({
			'phoneNumbers': [
				{
					'type': 'Other',
					'number': 'test'
				}
			],
			'name': {
				'first': 'test',
				'last': 'test'
			}
		});
	});

	it('saves primary contact', () => {
		service.savePrimaryContact('test', 'test', 'test').subscribe();

		const req = httpTestingController.expectOne(`${environment.navitaireApiBaseUrl}v1/booking/contacts/primary`);
		expect(req.request.method).toBe('PUT');
		expect(req.request.body).toEqual({
			'phoneNumbers': [
				{
					'type': 'Other',
					'number': 'test'
				}
			],
			'name': {
				'first': 'test',
				'last': 'test'
			}
		});
	});

	it('adds payment', () => {
		service.addPayment('test', 'test').subscribe();

		const req = httpTestingController.expectOne(`${environment.navitaireApiBaseUrl}v1/booking/payments`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual({
			'paymentMethodCode': 'MC',
			'amount': 0.0,
			'paymentFields': {
				'ACCTNO': 'test',
				'CC::AccountHolderName': 'test'
			},
			'currencyCode': 'USD',
			'installments': 1
		});
	});

	it('gets booking', () => {
		service.getBooking().subscribe();

		const req = httpTestingController.expectOne(`${environment.navitaireApiBaseUrl}v1/booking`);
		expect(req.request.method).toBe('GET');
	});

	it('commits booking', () => {
		service.commitBooking().subscribe();

		const req = httpTestingController.expectOne(`${environment.navitaireApiBaseUrl}v1/booking`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual({});
	});
});
