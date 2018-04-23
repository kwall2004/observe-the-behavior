import { NgModule } from '@angular/core';
import { Component, Input, Directive } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
	/* tslint:disable-next-line */
	selector: 'tab',
	template: ''
})
class MockTabComponent {
	@Input() heading;
}

@Component({
	/* tslint:disable-next-line */
	selector: 'tabset',
	template: ''
})
class MockTabsetComponent { }

@Directive({
	/* tslint:disable-next-line */
	selector: 'input[typeahead]',
	exportAs: 'typeahead'
})
class MockTypeaheadDirective {
	@Input() typeahead: any;
}

@Directive({
	/* tslint:disable-next-line */
	selector: 'input[bsDatepicker]',
	exportAs: 'bsDatepicker'
})
class MockDatepickerDirective {
	@Input() bsConfig: any;
}

@Directive({
	/* tslint:disable-next-line */
	selector: 'input[bsDaterangepicker]',
	exportAs: 'bsDaterangepicker'
})
class MockDaterangepickerDirective {
	@Input() bsConfig: any;
}

@Directive({
	/* tslint:disable-next-line */
	selector: '[collapse]'
})
class MockCollapseDirective {
	@Input() collapse: boolean;
}

@Component({
	/* tslint:disable-next-line */
	selector: 'accordion',
	template: ''
})
class MockAccordionComponent { }

@Component({
	/* tslint:disable-next-line */
	selector: 'accordion-group',
	template: ''
})
class MockAccordionGroupComponent {
	@Input() isOpen;
}
class MockModal { }
class MockModalRef { }

@NgModule({
	declarations: [
		MockTabComponent,
		MockTabsetComponent,
		MockTypeaheadDirective,
		MockDatepickerDirective,
		MockDaterangepickerDirective,
		MockCollapseDirective,
		MockAccordionComponent,
		MockAccordionGroupComponent
	],
	exports: [
		MockTabComponent,
		MockTabsetComponent,
		MockTypeaheadDirective,
		MockDatepickerDirective,
		MockDaterangepickerDirective,
		MockCollapseDirective,
		MockAccordionComponent,
		MockAccordionGroupComponent
	],
	providers: [{
		provide: BsModalService,
		useClass: MockModal
	},
	{
		provide: BsModalRef,
		useClass: MockModalRef
	}]
})
export class NgxBootstrapTestingModule { }
