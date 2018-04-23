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
		BsDatepickerModule.forRoot(),
		TooltipModule.forRoot(),
		ButtonsModule.forRoot(),
		CollapseModule.forRoot(),
		ModalModule.forRoot(),
		TabsModule.forRoot(),
		TypeaheadModule.forRoot(),
		AccordionModule.forRoot(),
		PopoverModule.forRoot(),
		BsDropdownModule.forRoot()
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
