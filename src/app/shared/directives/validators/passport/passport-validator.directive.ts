import {
	NG_VALIDATORS,
	FormControl,
	ValidatorFn,
	Validator
} from '@angular/forms';
import { Directive } from '@angular/core';
@Directive({
	selector: '[appPassport][ngModel]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: PassportValidatorDirective,
			multi: true
		}
	]
})
export class PassportValidatorDirective implements Validator {
	validator: ValidatorFn;
	constructor() {
		this.validator = this.passportValidator();
	}
	validate(c: FormControl) {
		return this.validator(c);
	}

	passportValidator(): ValidatorFn {
		return (c: FormControl) => {

			const isValid = /^[a-zA-Z0-9]+$/.test(c.value);


			if (isValid) {
				return null;
			} else {
				return {
					passport: true
				};
			}
		};
	}
}
