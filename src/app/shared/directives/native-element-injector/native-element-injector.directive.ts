import { ElementRef, Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: '[ngModel]'
})
export class NativeElementInjectorDirective {
	constructor(private el: ElementRef, private control: NgControl) {
		(<any>this.control.control).nativeElement = this.el.nativeElement;
	}
}
