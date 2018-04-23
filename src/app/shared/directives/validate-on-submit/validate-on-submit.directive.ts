import { Directive, Host } from '@angular/core';
import { NgForm } from '@angular/forms';
import { markFormGroupTouched } from '../../../shared/utilities/forms.utility';

@Directive({
	selector: '[appValidateOnSubmit]'
})
export class ValidateOnSubmitDirective {

	constructor(@Host() form: NgForm) {
		const oldSubmit = form.onSubmit;
		form.onSubmit = function (): boolean {
			if (form.invalid) {
				markFormGroupTouched(form.controls, false);
				return false;
			}
			return oldSubmit.apply(form, arguments);
		};
	}

}
