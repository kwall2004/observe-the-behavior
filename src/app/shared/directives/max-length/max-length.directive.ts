import { Directive, Input, HostListener, ElementRef } from '@angular/core';

// input field behavior modifier:
// suppresses keypress and paste events
// so that the user may only enter single keystrokes when the current
// length of the host's value is less than the supplied upper limit

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: '[maxLength]'
})
export class MaxLengthDirective {

	@Input('maxLength')
	maxLength: number;

	@HostListener('keypress', ['$event'])
	onKeyPress(event: any) {
		if (this.host.nativeElement.value.length >= this.maxLength) {
			event.preventDefault();
		}
	}

	@HostListener('paste', ['$event'])
	onPaste(event: any) {
		event.preventDefault();
	}

	constructor(private host: ElementRef) { }
}

