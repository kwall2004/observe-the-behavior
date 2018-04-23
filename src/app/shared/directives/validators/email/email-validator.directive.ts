import {
	NG_VALIDATORS,
	FormControl,
	ValidatorFn,
	Validator
} from '@angular/forms';
import { Directive } from '@angular/core';
@Directive({
	selector: '[appEmail][ngModel]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: EmailValidatorDirective,
			multi: true
		}
	]
})
export class EmailValidatorDirective implements Validator {
	validator: ValidatorFn;
	constructor() {
		this.validator = this.emailValidator();
	}
	validate(c: FormControl) {
		return this.validator(c);
	}

	emailValidator(): ValidatorFn {
		return (c: FormControl) => {
			/*<!--pattern=" ^[a-zA-Z0–9_.+-]+@[a-zA-Z0–9-]+.[a-zA-Z0–9-.]+$ "-->*/
			const isValid = /^[_A-Za-z0-9]+(\.[_A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[a-z0-9-]+)*(\.[A-Za-z]{2,4})$/.test(c.value);
			if (isValid) {
				return null;
			} else {
				return {
					email: true
				};
			}
		};
	}
}
