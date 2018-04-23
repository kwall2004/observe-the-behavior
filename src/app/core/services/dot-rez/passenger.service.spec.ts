import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';

import { PassengerService } from './passenger.service';
import { setGenderFromTitle } from '../../../shared/utilities';

describe('PassengerService', () => {
	let injector: TestBed;
	let service: PassengerService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				PassengerService
			]
		});
		injector = getTestBed();
		service = injector.get(PassengerService);
		httpTestingController = injector.get(HttpTestingController);
	});


	afterEach(() => {
		httpTestingController.verify();
	});

	it('is created', () => {
		expect(service).toBeTruthy();
	});

	it('saves Passenger', () => {
		service.savePassenger(
			'MCFBRFQ-',
			'Firstname',
			'Lastname',
		).subscribe();

		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}v2/booking/passengers/MCFBRFQ-`);
		expect(req.request.method).toBe('PATCH');
		expect(req.request.body).toEqual({
			passenger: {
				name: {
					first: 'Firstname',
					last: 'Lastname',
				}
			}
		});
	});




	it('saves a passenger and primary contact', () => {

		const formPayload = {
			passengers: {
				'MCFBRFQ-': {
					customerNumber: '',
					knownTravelerNumber: '123456789',
					redressNumber: '987654321',
					title: 'Mr',
					firstName: 'Testfirstname',
					middleName: 'Testmiddlename',
					lastName: 'Testlastname',
					suffix: 'Jr',
					dateOfBirth: '07/26/1973',
					accountNumber: '',
				},
			},
			freeSpirit: {
				passwordConfirmed: '*Test123456789',
				fSEnrollCheckbox: true,
			},
			primaryContact: {
				title: 'Mr',
				firstName: 'Testfirstname',
				middleName: 'Testmiddlename',
				lastName: 'Testlastname',
				suffix: 'Jr',
				address: '222 Pine',
				countryCode: 'US',
				provinceState: 'MI',
				city: 'Pineville',
				postalCode: '48334',
				phoneNumber: '222-222-2222',
				contactEmailPrimary: 'testemail@testemail.com',
				dateOfBirth: '07/26/1973',

			}
		};
		service.savePassengersAndPrimaryContact(formPayload).subscribe();



		const passengersArray = [];

		// Define the KTN Traveler Document
		const myPassengerKTNObject = {
			passengerKey: 'MCFBRFQ-',
			documentTypeCode: 'K', // KTN Document Code
			number: '123456789',
			name: {
				title: 'Mr',
				first: 'Testfirstname',
				middle: 'Testmiddlename',
				last: 'Testlastname',
				suffix: 'Jr',
			},
		};

		// Define the Redress Traveler Document
		const myPassengerRedressObject = {
			passengerKey: 'MCFBRFQ-',
			documentTypeCode: 'R', // KTN Document Code
			number: '987654321',
			name: {
				title: 'Mr',
				first: 'Testfirstname',
				middle: 'Testmiddlename',
				last: 'Testlastname',
				suffix: 'Jr',
			},
		};


		// Define one passenger for our passenger array
		const myPassengerObject = {
			passengerKey: 'MCFBRFQ-',
			passengerAlternateKey: null,
			customerNumber: '', // Enable this later
			fees: [],
			name: {
				title: 'Mr',
				first: 'Testfirstname',
				middle: 'Testmiddlename',
				last: 'Testlastname',
				suffix: 'Jr',
			},
			passengerTypeCode: 'ADT', // Adult need to test children as well.
			discountCode: '',
			bags: [],
			program: {
				code: '',
				levelCode: '',
				number: ''
			},
			infant: null,
			info: {
				nationality: '',
				residentCountry: 'US',
				gender: setGenderFromTitle('Mr'),
				dateOfBirth: '07/26/1973',
				familyNumber: 0,
			},
			travelDocuments: [myPassengerKTNObject, myPassengerRedressObject],
			addresses: [],
			weightCategory: 1
		};



		// Push single Pax into paxarray
		passengersArray.push(myPassengerObject);

		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}nk/passengers`);
		expect(req.request.method).toBe('PUT');
		expect(req.request.body).toEqual({
			hasPassword: true,
			password: '*Test123456789',
			passengers: passengersArray,
			contact: {
				name: {
					title: 'Mr',
					first: 'Testfirstname',
					middle: 'Testmiddlename',
					last: 'Testlastname',
					suffix: 'Jr',
				},
				address: {
					lineOne: '222 Pine',
					countryCode: 'US',
					provinceState: 'MI',
					city: 'Pineville',
					postalCode: '48334',
				},
				homePhone: '222-222-2222',
				emailAddress: 'testemail@testemail.com',
				dateOfBirth: '07/26/1973'
			},
		});
	});




	it('saves / adds Passengers SSRs', () => {

		// Form Payload
		const formPayload = {
			passengers: {
				'MCFBRFQ-': {
					hasPetInCabin: true,
					isHearingImpaired: true,
					hasServiceAnimal: false,
					hasPortableOxygen: true,
					hasVisionDisability: false,
					hasEmotionalSupportAnimal: false,
					WheelchairManuallyPoweredValue: true,
					hasWheelchairStraightBack: false,
					hasWheelchairCustomerAisleChair: false,
					hasOther: false,
					isVolunteer: false,
					hasWheelchairToFromGate: true,
					wheelChairOwn: 'hasWheelchairBatteryPoweredWetCell',
				},
			}
		};

		service.addPassengerSSR(formPayload).subscribe();


		// Expected Response
		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}nk/passengers/ssrs`);

		const passengers = [];

		const myPassengerSSRObject = {
			passengerKey: 'MCFBRFQ-',
			hasPetInCabin: true,
			isHearingImpaired: true,
			hasServiceAnimal: false,
			hasPortableOxygen: true,
			hasVisionDisability: false,
			hasEmotionalSupportAnimal: false,
			hasWheelchairStoredInCabin: false,
			hasWheelchairManuallyPowered: false,
			hasWheelchairStraightBack: false,
			hasWheelchairCustomerAisleChair: false,
			hasOther: false,
			hasWheelchairBatteryPoweredWetCell: true,
			hasWheelchairBatteryPoweredDryGelCell: false,
			isVolunteer: false,
			hasWheelchairToFromGate: true,
		};
		passengers.push(myPassengerSSRObject);

		expect(req.request.method).toBe('PUT');
		expect(req.request.body).toEqual({ passengers });
	});



});
