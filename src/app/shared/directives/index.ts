import * as fromValidators from './validators';
import { NkInputDirective } from './nk-input/nk-input.directive';
import { BsControlStatusDirective } from './bs-control-status/bs-control-status.directive';
import { ValidateOnSubmitDirective } from './validate-on-submit/validate-on-submit.directive';
import { NativeElementInjectorDirective } from './native-element-injector/native-element-injector.directive';
import { AllowIfNumericDirective } from './allow-if-numeric/allow-if-numeric.directive';
import { MaxLengthDirective } from './max-length/max-length.directive';
import { DisableIfNotValidDirective } from './disable-if-not-valid/disable-if-not-valid.directive';
import { BsTypeaheadBindSecondaryDirective } from './bs-typeahead-bind-secondary/bs-typeahead-bind-secondary';
import { SelectDefaultDirective } from './select-default/select-default.directive';
import { OutsideClickDirective } from './outside-click/outside-click.directive';
import { DropdownDirective } from './dropdown/dropdown.directive';

export const directives = [
	NkInputDirective,
	BsControlStatusDirective,
	ValidateOnSubmitDirective,
	NativeElementInjectorDirective,
	AllowIfNumericDirective,
	MaxLengthDirective,
	DisableIfNotValidDirective,
	BsTypeaheadBindSecondaryDirective,
	SelectDefaultDirective,
	OutsideClickDirective,
	DropdownDirective,
	...fromValidators.validators
];

export * from './validators';
export * from './nk-input/nk-input.directive';
export * from './bs-control-status/bs-control-status.directive';
export * from './validate-on-submit/validate-on-submit.directive';
export * from './native-element-injector/native-element-injector.directive';
export * from './allow-if-numeric/allow-if-numeric.directive';
export * from './max-length/max-length.directive';
export * from './disable-if-not-valid/disable-if-not-valid.directive';
export * from './bs-typeahead-bind-secondary/bs-typeahead-bind-secondary';
export * from './select-default/select-default.directive';
export * from './outside-click/outside-click.directive';
export * from './dropdown/dropdown.directive';
