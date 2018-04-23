import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toDate' })
export class ToDatePipe implements PipeTransform {
	transform(dateString: string): Date {
		return dateString ? new Date(dateString) : undefined;
	}
}
