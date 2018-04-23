import { Directive, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

const controlStatusHost = {
	'[class.is-invalid]': 'ngClassInvalid'
};

/**
 * Automatically adds boostrap error styling to inputs that are marked as invalid and touched.
 */
@Directive({
	// tslint:disable-next-line:directive-selector
	selector: '[formControlName],[ngModel],[formControl]',
	// tslint:disable-next-line:use-host-property-decorator
	host: controlStatusHost
})
export class BsControlStatusDirective {
	public constructor(@Self() private control: NgControl) {
	}

	get ngClassInvalid(): boolean {
		if (this.control.control == null) {
			return false;
		}
		return this.control.control.invalid && this.control.control.touched;
	}
}
