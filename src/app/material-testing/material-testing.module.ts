import { NgModule } from '@angular/core';
import { Component, Input, Directive } from '@angular/core';

@Directive({
	/* tslint:disable-next-line */
	selector: 'button[mat-button]'
})
class MockButtonDirective {
	@Input() matMenuTriggerFor: any;
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-menu',
	template: ''
})
class MockMenuComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-toolbar',
	template: ''
})
class MockToolbarComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-error',
	template: ''
})
class MockErrorComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-form-field',
	template: ''
})
class MockFormFieldComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-option',
	template: ''
})
class MockOptionComponent {
	@Input() value: any;
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-select',
	template: ''
})
class MockSelectComponent {
}

@Directive({
	/* tslint:disable-next-line */
	selector: '[textMask]'
})
class MockMaskedInputDirective {
	@Input() textMask: any;
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-datepicker-toggle',
	template: ''
})
class MockDatepickerToggleComponent {
	@Input() for: any;
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-datepicker',
	template: ''
})
class MockDatepickerComponent {
}

@Directive({
	/* tslint:disable-next-line */
	selector: 'input[matInput]'
})
class MockDatepickerDirective {
	@Input() matDatepicker: any;
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-tab',
	template: ''
})
class MockTabComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-tab-group',
	template: ''
})
class MockTabGroupComponent {
	@Input() selectedIndex: number;
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-progress-bar',
	template: ''
})
class MockProgressbarComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-checkbox',
	template: ''
})
class MockCheckBoxComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-radio-group',
	template: ''
})
class MockRadioGroupComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-radio-button',
	template: ''
})
class MockRadioButtonComponent {
	@Input() checked: any;
}

@NgModule({
	declarations: [
		MockButtonDirective,
		MockMenuComponent,
		MockToolbarComponent,
		MockErrorComponent,
		MockFormFieldComponent,
		MockOptionComponent,
		MockSelectComponent,
		MockMaskedInputDirective,
		MockDatepickerToggleComponent,
		MockDatepickerComponent,
		MockDatepickerDirective,
		MockTabComponent,
		MockTabGroupComponent,
		MockProgressbarComponent,
		MockCheckBoxComponent,
		MockRadioGroupComponent,
		MockRadioButtonComponent
	],
	exports: [
		MockButtonDirective,
		MockMenuComponent,
		MockToolbarComponent,
		MockErrorComponent,
		MockFormFieldComponent,
		MockOptionComponent,
		MockSelectComponent,
		MockMaskedInputDirective,
		MockDatepickerToggleComponent,
		MockDatepickerComponent,
		MockDatepickerDirective,
		MockTabComponent,
		MockTabGroupComponent,
		MockProgressbarComponent,
		MockCheckBoxComponent,
		MockRadioGroupComponent,
		MockRadioButtonComponent
	]
})
export class TestingModule { }
