import { Directive, Host, OnDestroy, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

// button behavior modifier:
// subscribes host button to containing form's status change events,
// and disables the button when a status value other than valid is encountered
// -- permits for more reliable "disabled" functionality.

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: 'button[disableIfNotValid]'
})
export class DisableIfNotValidDirective implements OnDestroy {

	private sub: Subscription;

	constructor(@Host() form: NgForm, @Host() elem: ElementRef) {
		this.sub = form.statusChanges.subscribe(status => {
			if (status !== 'VALID') {
				elem.nativeElement.disabled = true;
			} else {
				elem.nativeElement.disabled = false;
			}
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
