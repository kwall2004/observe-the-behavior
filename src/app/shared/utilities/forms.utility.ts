import { FormGroup, FormArray, FormControl } from '@angular/forms';

export function markFormGroupTouched(formGroup, result) {
	(<any>Object).keys(formGroup).forEach(key => {
		const control = formGroup[key];
		if (control instanceof FormGroup || control instanceof FormArray) {
			markFormGroupTouched(control.controls, result);
		}

		if (!result && control.invalid && control instanceof FormControl) {
			result = control;
			// this property is custom so we have to cast is as any to allow it to compile
			(<any>control).nativeElement.focus();
		}
		control.markAsTouched();
		// todo return result and only focus the first element instead. was returning undefined.
		// return result;
	});
}
