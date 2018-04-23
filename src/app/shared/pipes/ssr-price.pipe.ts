import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ssrPrice' })
export class SsrPricePipe implements PipeTransform {
	transform(ssrs: any, ssrCode): any {
		if (!ssrCode || !ssrs) {
			return {};
		}
		for (const journey in ssrs) {
			if (ssrs.hasOwnProperty(journey)) {
				const ssr = ssrs[journey][ssrCode];
				for (const pax in ssr.passengersAvailability) {
					return ssr.passengersAvailability[pax].price;
				}
			}
		}
	}
}
