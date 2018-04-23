import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'paxType' })
export class PaxTypePipe implements PipeTransform {
	transform(passengerType: string): string {
		const paxTypes = {
			'ADT': 'Adult',
			'INF': 'Infant',
			'CHD': 'Child'
		};
		return paxTypes[passengerType];
	}
}
