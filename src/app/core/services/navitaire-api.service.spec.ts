import { TestBed, getTestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '@env/environment';

import { NavitaireApiService } from './navitaire-api.service';

describe('NavitaireApiService', () => {
	let injector: TestBed;
	let service: NavitaireApiService;
	let mockHttpClient: HttpTestingController;

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
		mockHttpClient = injector.get(HttpTestingController);
	});

	afterEach(() => {
		mockHttpClient.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('gets stations', () => {
		service.getStations().subscribe();

		const req = mockHttpClient.expectOne(`${environment.navitaireApiUrl}v1/resources/Stations?ActiveOnly=true`);
		expect(req.request.method).toBe('GET');
	});

	it('searches availability', () => {
		const body = {
			'origin': 'test',
			'destination': 'test',
			'beginDate': '2018-01-29',
			'passengers': [
				{
					'type': 'ADT',
					'count': 1
				}
			],
			'currencyCode': 'USD'
		};

		service.searchAvailability('test', 'test', new Date(2018, 0, 29)).subscribe();

		const req = mockHttpClient.expectOne(`${environment.navitaireApiUrl}v1/availability/search/simple`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual(body);
	});

	it('searches low fare', () => {
		const body = {
			'origin': 'test',
			'destination': 'test',
			'beginDate': '2018-01-29',
			'passengers': [
				{
					'type': 'ADT',
					'count': 1
				}
			],
			'currencyCode': 'USD',
			'daysToLeft': 3,
			'daysToRight': 3
		};

		service.searchAvailabilityLowFare('test', 'test', new Date(2018, 0, 29)).subscribe();

		const req = mockHttpClient.expectOne(`${environment.navitaireApiUrl}v1/availability/lowfare/simple`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual(body);
	});

	it('sells trip', () => {
		const body = {
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
		};

		service.sellTrip('test', 'test').subscribe();

		const req = mockHttpClient.expectOne(`${environment.navitaireApiUrl}v2/trip/sell`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual(body);
	});

	it('saves passenger', () => {
		const body = {
			'passenger': {
				'name': {
					'first': 'test',
					'last': 'test'
				}
			}
		};

		service.savePassenger('test', 'test', 'test').subscribe();

		const req = mockHttpClient.expectOne(`${environment.navitaireApiUrl}v2/booking/passengers/test`);
		expect(req.request.method).toBe('PATCH');
		expect(req.request.body).toEqual(body);
	});

	it('adds primary contact', () => {
		const body = {
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
		};

		service.addPrimaryContact('test', 'test', 'test').subscribe();

		const req = mockHttpClient.expectOne(`${environment.navitaireApiUrl}v1/booking/contacts/primary`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual(body);
	});

	it('saves primary contact', () => {
		const body = {
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
		};

		service.savePrimaryContact('test', 'test', 'test').subscribe();

		const req = mockHttpClient.expectOne(`${environment.navitaireApiUrl}v1/booking/contacts/primary`);
		expect(req.request.method).toBe('PUT');
		expect(req.request.body).toEqual(body);
	});

	it('adds payment', () => {
		const body = {
			'paymentMethodCode': 'MC',
			'amount': 0.0,
			'paymentFields': {
				'ACCTNO': 'test',
				'CC::AccountHolderName': 'test'
			},
			'currencyCode': 'USD',
			'installments': 1
		};

		service.addPayment('test', 'test').subscribe();

		const req = mockHttpClient.expectOne(`${environment.navitaireApiUrl}v1/booking/payments`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual(body);
	});

	it('gets booking', () => {
		service.getBooking().subscribe();

		const req = mockHttpClient.expectOne(`${environment.navitaireApiUrl}v1/booking`);
		expect(req.request.method).toBe('GET');
	});

	it('commits booking', () => {
		service.commitBooking().subscribe();

		const req = mockHttpClient.expectOne(`${environment.navitaireApiUrl}v1/booking`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual({});
	});
});
