import { Pipe, PipeTransform } from '@angular/core';
/*
 * Returns a passenger SRR object if exists for a Passenger Key from the Passenger Store.
 *
 * Takes an passenger SSR array of objects, matching passenger Key, and optional proprty return string for wheelchairs.
 * Usage:
 *   ([{ssrPassengerObject}] | paxKey:'key' | wheelchairReturnType:'string')
 * Example:
 * 	((passengers$ | async)?.SSRS | ssrPassenger:passenger:'wheelchairType')" //For Passenger Object - Type of wheelchair (captured but can be any of three properties - for select)
 *  ((passengers$ | async)?.SSRS | ssrPassenger:passenger:'wheelchairOwn')" // Return if wheelchair is owned or not (not captured in SSRS but derived from wheelchairtype)
 *  ((passengers$ | async)?.SSRS | ssrPassenger:passenger)?.hasWheelchairStraightBack //Returns object and derive property from object in template.
 *
*/
@Pipe({ name: 'ssrPassenger' })
export class SsrPassengerPipe implements PipeTransform {

	transform(ssrPassengerObject: any, paxKey: string, wheelchair?: string): any {

		for (const i of ssrPassengerObject) {

			if (i.hasOwnProperty('passengerKey')) {
				if (i.passengerKey === paxKey) {

					// If we are trying to get the wheelchair checkbox value deerviced from the types of wheelchairs, as there is no single property for this in SSRS.
					if (wheelchair === 'wheelchairOwn') {
						// If any wheelchair drop-downs are true, return true to wheelchair chackbox
						if (i.hasWheelchairBatteryPoweredWetCell === true || i.hasWheelchairBatteryPoweredDryGelCell === true || i.hasWheelchairManuallyPowered === true) {
							return true; // Has wheelchair
						} else {
							return false; // Doesn't have wheelchair
						}
						// Return wheelchair type for drop down derivied from three properties but we need to only return one for select
					} else if (wheelchair === 'wheelchairType') {

						if (i.hasWheelchairBatteryPoweredWetCell === true) {
							return 'hasWheelchairBatteryPoweredWetCell';
						} else if (i.hasWheelchairBatteryPoweredDryGelCell === true) {
							return 'hasWheelchairBatteryPoweredDryGelCell';
						} else if (i.hasWheelchairManuallyPowered === true) {
							return 'hasWheelchairManuallyPowered';
						}
					} else {
						// Return entire object so indivdual properties can be extracted in template.
						return i;
					}
				}
			}
		}
	}
}

