import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: '[cityStation][ngModel]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: CityStationDirective,
			multi: true
		}
	]
})
export class CityStationDirective implements Validator, OnInit {

	// tslint:disable-next-line:no-input-rename
	@Input('cityStation')
	initialValue: string;

	private prev: string;

	constructor() { }

	ngOnInit() {
		this.prev = this.initialValue;
	}

	@HostListener('typeaheadOnSelect', ['$event'])
	onMatch(event: any) {
		this.prev = event.item.shortName;
	}

	validate(c: FormControl) {

		const c1 = c.value ? c.value : '';
		const c2 = this.prev ? this.prev : '';
		if (c1 === c2) {
			return null;
		} else {
			return {
				city: true
			};
		}
	}
}
