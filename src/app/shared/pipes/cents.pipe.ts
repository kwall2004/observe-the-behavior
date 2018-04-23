import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cents' })
export class CentsPipe implements PipeTransform {
	transform(value: any): any {
		const result = Number(value).toString().split('.');
		return result.length > 1 ? result[1] : '';
	}
}
