import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { ValuesPipe } from './pipes/values.pipe';

import { MaterialModule } from './material.module';
import { TranslateModule } from '@ngx-translate/core';

import { TextMaskModule } from 'angular2-text-mask';

// import * as fromComponents from './components';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		TextMaskModule,
	],
	declarations: [
		ValuesPipe,
		// ...fromComponents.components
	],
	exports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		TranslateModule,
		TextMaskModule,
		ValuesPipe,
		// ...fromComponents.components
	],
	providers: [
		DatePipe,
		ValuesPipe
	]
})
export class SharedModule { }
