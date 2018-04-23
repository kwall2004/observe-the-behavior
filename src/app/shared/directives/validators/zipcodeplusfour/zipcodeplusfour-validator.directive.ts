import {
	NG_VALIDATORS,
	FormControl,
	ValidatorFn,
	Validator
} from '@angular/forms';
import { Directive } from '@angular/core';
@Directive({
	selector: '[appZipPlusFour][ngModel]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: ZipcodePlusFourValidatorDirective,
			multi: true
		}
	]
})
export class ZipcodePlusFourValidatorDirective implements Validator {
	validator: ValidatorFn;
	constructor() {
		this.validator = this.zipcodePlusFourValidator();
	}
	validate(c: FormControl) {
		return this.validator(c);
	}

	zipcodePlusFourValidator(): ValidatorFn {
		return (c: FormControl) => {
			const isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(c.value);
			if (isValid) {
				return null;
			} else {
				return {
					zipcode: true
				};
			}
		};
	}
}
