import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../../shared';

import * as fromComponents from './components';
import { translateLoader } from '../../core/services/translate-loader.service';
import { TranslateSync } from '../../core/services/translate-sync.service';
// for AOT
export function createTranslateLoader(http: HttpClient) {
	return translateLoader(http, ['confirmation']);
}

export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.ConfirmationPageComponent
	}
];

@NgModule({
	imports: [
		SharedModule,
		RouterModule.forChild(ROUTES),
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
			},
			isolate: true
		})
	],
	declarations: [
		fromComponents.ConfirmationPageComponent
	],
	providers: [TranslateSync]
})
export class ConfirmationModule {
	constructor(private translateSync: TranslateSync) {
		this.translateSync.sync();
	}
}
