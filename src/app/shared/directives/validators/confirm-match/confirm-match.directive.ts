import { Directive, Input, OnDestroy } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Directive({
	selector: '[appConfirmMatch][ngModel]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: ConfirmMatchDirective,
			multi: true
		}
	]
})
export class ConfirmMatchDirective implements Validator, OnDestroy {
	@Input('appConfirmMatch') appConfirmMatch: string;
	matchingControl: FormControl;
	sub: Subscription;

	validate(control: AbstractControl): { [key: string]: any } {
		if (!this.matchingControl) {
			this.matchingControl = control.parent.controls[this.appConfirmMatch];
			this.sub = this.matchingControl.valueChanges.subscribe(() => {
				control.updateValueAndValidity();
			});
		}

		if (!control.value || !this.matchingControl.valid) {
			return null;
		}

		if (control.value === this.matchingControl.value) {
			return null;
		}

		return {
			mismatch: true
		};
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}
