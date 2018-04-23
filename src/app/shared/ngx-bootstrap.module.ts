import { NgModule } from '@angular/core';

import {
	BsDatepickerModule,
	TooltipModule,
	ButtonsModule,
	CollapseModule,
	ModalModule,
	TabsModule,
	TypeaheadModule,
	AccordionModule,
	PopoverModule,
	BsDropdownModule
} from 'ngx-bootstrap';

@NgModule({
	imports: [
		BsDatepickerModule,
		TooltipModule,
		ButtonsModule,
		CollapseModule,
		ModalModule,
		TabsModule,
		TypeaheadModule,
		AccordionModule,
		PopoverModule,
		BsDropdownModule
	],
	exports: [
		BsDatepickerModule,
		TooltipModule,
		ButtonsModule,
		CollapseModule,
		ModalModule,
		TabsModule,
		TypeaheadModule,
		AccordionModule,
		PopoverModule,
		BsDropdownModule
	]
})
export class NgxBootstrapModule { }
