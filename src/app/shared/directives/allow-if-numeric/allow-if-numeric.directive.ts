import { Directive, HostListener } from '@angular/core';

// input field behavior modifier:
// suppresses keypress and paste events
// so that the user may only enter numeric characters one keystroke at a time

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: '[allowIfNumeric]'
})
export class AllowIfNumericDirective {

	@HostListener('keypress', ['$event'])
	onKeyPress(event: any) {
		if (event.key && !Number.isInteger(Number.parseInt(event.key))) {
			event.preventDefault();
		}
	}

	@HostListener('paste', ['$event'])
	onPaste(event: any) {
		event.preventDefault();
	}
}
