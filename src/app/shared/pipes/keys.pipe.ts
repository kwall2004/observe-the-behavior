import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
	transform(object: any): any {
		return Object.keys(object);
	}
}
