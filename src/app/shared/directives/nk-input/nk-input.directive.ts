import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: `input[nkInput], textarea[nkInput], select[nkInput]`,
	exportAs: 'nkInput',
})
// tslint:disable-next-line:directive-class-suffix
export class NkInputDirective {
	@HostBinding('class.form-control') formControlClass = true;
	constructor(public el: ElementRef) { }
}
