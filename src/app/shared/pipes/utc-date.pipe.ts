import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'utcDate'
})
export class UtcDatePipe implements PipeTransform {

	transform(value: string, dateParameter?: string): any {

		if (!value) {
			return '';
		}
		const dateValue = new Date(value);

		switch (dateParameter) {
			case 'M': {

				return dateValue.getUTCMonth() + 1;
			}
			case 'd': {
				return dateValue.getUTCDate();
			}
			case 'y': {
				return dateValue.getUTCFullYear();
			}
			default: {
				const dateWithNoTimezone = new Date(
					dateValue.getUTCFullYear(),
					dateValue.getUTCMonth(),
					dateValue.getUTCDate(),
					dateValue.getUTCHours(),
					dateValue.getUTCMinutes(),
					dateValue.getUTCSeconds()
				);

				return dateWithNoTimezone;
			}
		}
	}
}
