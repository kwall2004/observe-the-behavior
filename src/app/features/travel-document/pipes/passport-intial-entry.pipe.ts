import { Pipe, PipeTransform } from '@angular/core';
/*
This pipe take a booking object, review if a pass[port exists, and populates the passport/travel document screen with its initial data
from either the passenger infomration, or the passengers passport infomration.
// Optional Parameters:
// name - returns a name object (title, first,middle,last,suffix)
// location - returns a country code
*/
@Pipe({ name: 'passportInitialEntry' })
export class PassportInitialEntryPipe implements PipeTransform {

	hasPassport = false;
	passportTravelDocument: any;

	transform(passengerObject: any, propertyReturnType?: string): any {

		// Search for passport document if exist
		for (const i of passengerObject.travelDocuments) {
			if (i.hasOwnProperty('documentTypeCode')) {
				if (i.documentTypeCode === 'P') {
					this.hasPassport = true;
					this.passportTravelDocument = i;
				}
			}
		}

		if (this.hasPassport) {
			switch (propertyReturnType) {
				case 'name': {
					// Return PASSPORT Name Object
					return this.passportTravelDocument.name;
				}
				case 'location': {
					// Return PASSPORT Nationality Data
					return { nationality: this.passportTravelDocument.nationality, issuedByCode: this.passportTravelDocument.issuedByCode };
				}
			}

		} else if (!this.hasPassport) {
			switch (propertyReturnType) {
				case 'name': {
					// Return PASSENGER Name for Prepopulation
					return passengerObject.name;
				}
				case 'location': {
					// Return PASSENGER Nationality Data
					return { nationality: passengerObject.info.residentCountry, issuedByCode: passengerObject.info.residentCountry };
				}
			}
		}
	}
}

