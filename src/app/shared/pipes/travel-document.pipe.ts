import { Pipe, PipeTransform } from '@angular/core';
/*
 * Returns a travel documents object if exists within travel documents based on the document type code:
 *
 * Takes an travel document array of objects, document type code string, and a return property type.
 * Usage:
 *   [{travelDocumentProperties}] | travelDocument:'CODE'
 * Example:
 *   {{ (booking.passengers[passenger]?.travelDocuments | travelDocumentNumber:'P').property}} //For Passports
 *
*/
@Pipe({ name: 'travelDocument' })
export class TravelDocumentPipe implements PipeTransform {

	transform(travelDocumentObject: any, travelDocumentType: string): any {

		for (const i of travelDocumentObject) {

			if (i.hasOwnProperty('documentTypeCode')) {
				if (i.documentTypeCode === travelDocumentType) {
					return i;
				}
			}
		}
	}
}

