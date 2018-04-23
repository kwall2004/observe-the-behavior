import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dollars' })
export class DollarsPipe implements PipeTransform {
	transform(value: any): any {
		const result = Number(value).toString().split('.');
		return result.length > 0 ? result[0] : '';
	}
}
