import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';
import * as fromPipes from './pipes';

import { NgxBootstrapModule } from './ngx-bootstrap.module';
import { TranslateModule } from '@ngx-translate/core';

import { TextMaskModule } from 'angular2-text-mask';

import * as fromComponents from './components';
import * as fromDirectives from './directives';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		NgxBootstrapModule,
		TranslateModule,
		TextMaskModule
	],
	declarations: [
		...fromPipes.pipes,
		...fromComponents.components,
		...fromDirectives.directives
	],
	entryComponents: [fromComponents.RetrievePasswordInstructionComponent, fromComponents.ConfirmationCodeModalComponent],
	exports: [
		CommonModule,
		RouterModule,
		FormsModule,
		NgxBootstrapModule,
		TranslateModule,
		TextMaskModule,
		...fromPipes.pipes,
		...fromComponents.components,
		...fromDirectives.directives
	],
	providers: [
		DatePipe,
		...fromPipes.pipes
	]
})
export class SharedModule { }
