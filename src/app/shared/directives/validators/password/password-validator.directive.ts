import {
	NG_VALIDATORS,
	FormControl,
	ValidatorFn,
	Validator
} from '@angular/forms';
import { Directive } from '@angular/core';
@Directive({
	selector: '[appPassword][ngModel]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: PasswordValidatorDirective,
			multi: true
		}
	]
})
export class PasswordValidatorDirective implements Validator {
	validator: ValidatorFn;
	constructor() {
		this.validator = this.passwordValidator();
	}
	validate(c: FormControl) {
		return this.validator(c);
	}

	passwordValidator(): ValidatorFn {
		return (c: FormControl) => {

			const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W.*)[a-zA-Z0-9\S]{8,16}$/.test(c.value);

			/*
			Atleast One Special Character
			(?=.*\W.*)[a-zA-Z0-9\S]
			Atleast One Cap Character
			(?=.*[A-Z])
			Atleast One Numerical Character
			(?=.*[0-9])
			Atleast On LC Charcater
			(?=.*[a-z]
			Atleast 8-16 Characters
			{8,16}
			*/

			if (isValid) {
				return null;
			} else {
				return {
					password: true
				};
			}
		};
	}
}
