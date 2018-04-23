import { Directive, Host, Optional, Self, Inject, Input } from '@angular/core';
import { NgModel, ControlContainer, Validator, ValidatorFn, AsyncValidator, AsyncValidatorFn, ControlValueAccessor, NG_VALIDATORS, NG_ASYNC_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

// extension for NgModel for select elements:
// allows for a default value to be bound via the defaultValue attribute

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: 'select[ngModel][defaultValue]'
})
export class SelectDefaultDirective extends NgModel {

	@Input('defaultValue')
	set defaultValue(value: any) {
		this.model = value;
	}

	constructor(
		@Optional() @Host() parent: ControlContainer,
		@Optional() @Self() @Inject(NG_VALIDATORS) validators: Array<Validator | ValidatorFn>,
		@Optional() @Self() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<AsyncValidator | AsyncValidatorFn>,
		@Optional() @Self() @Inject(NG_VALUE_ACCESSOR) valueAccessors: ControlValueAccessor[]
	) {
		super(parent, validators, asyncValidators, valueAccessors);
	}
}
