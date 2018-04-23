import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

import { SharedModule } from '../../shared';
import * as fromComponents from './components';
import { translateLoader } from '../../core/services/translate-loader.service';
import { TranslateSync } from '../../core/services/translate-sync.service';
// for AOT
export function createTranslateLoader(http: HttpClient) {
	return translateLoader(http, ['payment']);
}

export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.PaymentPageComponent
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
	declarations: [...fromComponents.components],
	providers: [TranslateSync]
})
export class PaymentModule {
	constructor(private translateSync: TranslateSync) {
		this.translateSync.sync();
	}
}
