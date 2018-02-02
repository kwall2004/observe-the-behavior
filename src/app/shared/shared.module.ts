import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { ValuesPipe } from './pipes/values.pipe';

import { MaterialModule } from './material.module';

import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		TextMaskModule,
	],
	declarations: [ValuesPipe],
	exports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		TextMaskModule,
		ValuesPipe
	],
	providers: [
		DatePipe,
		ValuesPipe
	]
})
export class SharedModule { }
