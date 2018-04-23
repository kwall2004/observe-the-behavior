import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { setGenderFromTitle } from '../../../shared/utilities';
import * as moment from 'moment';

@Injectable()
export class PassengerService {
	constructor(private http: HttpClient) { }

	public savePassenger(passengerKey: string, firstName: string, lastName: string): Observable<any> {
		return this.http.patch(`${environment.dotRezApiBaseUrl}v2/booking/passengers/${passengerKey}`, {
			passenger: {
				name: {
					first: firstName,
					last: lastName
				}
			}
		});
	}

	public savePassengersAndPrimaryContact(formPayload: any): Observable<any> {
		const passengersArray = [];

		for (const key in (formPayload.passengers)) {
			const passenger = formPayload.passengers[key];

			const myTravelObjectArray = [];

			if (passenger.knownTravelerNumber != null && passenger.knownTravelerNumber !== '') {
				myTravelObjectArray.push({
					passengerKey: key,
					documentTypeCode: 'K', // KTN
					number: passenger.knownTravelerNumber,
					name: {
						title: passenger.title,
						first: passenger.firstName,
						middle: passenger.middleName,
						last: passenger.lastName,
						suffix: passenger.suffix,
					},
				});
			}

			if (passenger.redressNumber != null && passenger.redressNumber !== '') {
				myTravelObjectArray.push({
					passengerKey: key,
					documentTypeCode: 'R', // KTN
					number: passenger.redressNumber,
					name: {
						title: passenger.title,
						first: passenger.firstName,
						middle: passenger.middleName,
						last: passenger.lastName,
						suffix: passenger.suffix,
					},
				});
			}


			/*Create Passenger Object*/
			const myPassengerObject = {
				passengerKey: key,
				passengerAlternateKey: null,
				customerNumber: passenger.accountNumber,
				fees: [],
				name: {
					title: passenger.title,
					first: passenger.firstName,
					middle: passenger.middleName,
					last: passenger.lastName,
					suffix: passenger.suffix,
				},
				passengerTypeCode: 'ADT',
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
					gender: setGenderFromTitle(passenger.title),
					dateOfBirth: passenger.dateOfBirth,
					familyNumber: 0
				},
				travelDocuments: myTravelObjectArray,
				addresses: [],
				weightCategory: 1
			};

			passengersArray.push(myPassengerObject);
		}
		let pw = '';
		let hasPw = false;
		if (formPayload.freeSpirit) {
			if (formPayload.freeSpirit.passwordConfirmed) {
				pw = formPayload.freeSpirit.passwordConfirmed;
			}
			if (formPayload.freeSpirit.fSEnrollCheckbox) {
				hasPw = true;
			}
		}
		return this.http.put(`${environment.dotRezApiBaseUrl}nk/passengers`, {
			hasPassword: hasPw,
			password: pw,
			passengers: passengersArray,
			contact: {
				name: {
					title: formPayload.primaryContact.title,
					first: formPayload.primaryContact.firstName,
					middle: formPayload.primaryContact.middleName,
					last: formPayload.primaryContact.lastName,
					suffix: formPayload.primaryContact.suffix,
				},
				address: {
					lineOne: formPayload.primaryContact.address,
					countryCode: formPayload.primaryContact.countryCode,
					provinceState: formPayload.primaryContact.provinceState,
					city: formPayload.primaryContact.city,
					postalCode: formPayload.primaryContact.postalCode,
				},
				homePhone: formPayload.primaryContact.phoneNumber,
				emailAddress: formPayload.primaryContact.contactEmailPrimary,
				dateOfBirth: formPayload.primaryContact.dateOfBirth

			}
		});
	}

	public addPassengerSSR(formPayload: any): Observable<any> {
		const passengers = [];

		for (const key in (formPayload.passengers)) {
			const passenger = formPayload.passengers[key];

			let wheelchairBatteryPoweredWetCellValue = false;
			let WheelchairBatteryPoweredDryGelCellValue = false;
			let WheelchairManuallyPoweredValue = false;

			if (passenger.wheelChairOwn === 'hasWheelchairBatteryPoweredWetCell') {
				wheelchairBatteryPoweredWetCellValue = true;
			} else if (passenger.wheelChairOwn === 'hasWheelchairBatteryPoweredDryGelCell') {
				WheelchairBatteryPoweredDryGelCellValue = true;
			} else if (passenger.wheelChairOwn === 'hasWheelchairManuallyPowered') {
				WheelchairManuallyPoweredValue = true;
			}

			const myPassengerSSRObject = {
				passengerKey: key,
				hasPetInCabin: passenger.hasPetInCabin,
				isHearingImpaired: passenger.isHearingImpaired,
				hasServiceAnimal: passenger.hasServiceAnimal,
				hasPortableOxygen: passenger.hasPortableOxygen,
				hasVisionDisability: passenger.hasVisionDisability,
				hasEmotionalSupportAnimal: passenger.hasEmotionalSupportAnimal,
				hasWheelchairStoredInCabin: false,
				hasWheelchairStraightBack: passenger.hasWheelchairStraightBack,
				hasWheelchairCustomerAisleChair: passenger.hasWheelchairCustomerAisleChair,
				hasWheelchairToFromGate: passenger.hasWheelchairToFromGate,
				hasOther: passenger.hasOther,
				hasWheelchairManuallyPowered: WheelchairManuallyPoweredValue,
				hasWheelchairBatteryPoweredWetCell: wheelchairBatteryPoweredWetCellValue,
				hasWheelchairBatteryPoweredDryGelCell: WheelchairBatteryPoweredDryGelCellValue,
				isVolunteer: passenger.isVolunteer
			};
			passengers.push(myPassengerSSRObject);
		}

		return this.http.put(`${environment.dotRezApiBaseUrl}nk/passengers/ssrs`, {
			passengers
		});
	}


	public updatePassengerPassport(formPayload: any): Observable<any> {

		const passengersPassportArray = [];


		for (const key in (formPayload)) {
			const passenger = formPayload[key];
			// Negative one to our month in moment object to compensate for JS month offset (0)
			const passengerExpirationdate = moment({ y: passenger.passportExpirationYear, M: passenger.passportExpirationMonth - 1, d: passenger.passportExpirationDay });

			/*Create Passenger Object*/
			const passengerPassportObject = {
				passengerKey: key,
				nationality: passenger.nationality,
				issuedByCode: passenger.passportIssuingCountry,
				number: passenger.passportNumber,
				expirationDate: passengerExpirationdate,
				name: {
					title: passenger.title,
					first: passenger.firstName,
					middle: passenger.middleName,
					last: passenger.lastName,
					suffix: passenger.suffix,
				},
			};

			passengersPassportArray.push(passengerPassportObject);
		}

		return this.http.put(`${environment.dotRezApiBaseUrl}nk/passengers/passports`, {
			passengerPassorts: passengersPassportArray,
		});
	}

	public getPassengerSsrs(): Observable<any> {
		return this.http.get(`${environment.dotRezApiBaseUrl}nk/passengers/ssrs`);
	}
}
