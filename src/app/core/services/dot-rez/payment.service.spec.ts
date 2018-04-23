import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';

import { PaymentService } from './payment.service';

describe('PaymentService', () => {
	let injector: TestBed;
	let service: PaymentService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				PaymentService
			]
		});
		injector = getTestBed();
		service = injector.get(PaymentService);
		httpTestingController = injector.get(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('is created', () => {
		expect(service).toBeTruthy();
	});

	it('adds payment', () => {
		service.addPayment(
			{
				accountNumber: 'test',
				accountHolderName: 'test',
				amount: 0,
				expiryDate: '01/01/2020',
				verificationCode: 'test',
				currencyCode: 'USD',
				saveCard: false,
				address: 'test address'
			}
		).subscribe();

		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}v2/booking/payments`);
		expect(req.request.method).toBe('POST');
		expect(req.request.body).toEqual({
			paymentMethodCode: 'MC',
			amount: 0.0,
			paymentFields: {
				ACCTNO: 'test',
				EXPDATE: '01/01/2020',
				'CC::AccountHolderName': 'test',
				'CC::VerificationCode': 'test',
				'Avs::Address1': 'test address'
			},
			currencyCode: 'USD',
			installments: 1
		});
	});
});
