import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { SharedModule } from '../../shared/shared.module';
import * as fromComponents from './components';

import { translateLoader } from '../../core/services/translate-loader.service';
import { TranslateSync } from '../../core/services/translate-sync.service';
// for AOT
export function createTranslateLoader(http: HttpClient) {
	return translateLoader(http, ['bag']);
}

export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.BagsPageComponent
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
	providers: [TranslateSync],
	declarations: [...fromComponents.components],
	exports: [],
})
export class BagModule {
	constructor(private translateSync: TranslateSync) {
		this.translateSync.sync();
	}
}
