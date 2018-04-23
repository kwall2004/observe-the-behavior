import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { SharedModule } from '../../shared';
import * as fromComponents from './components';
import { translateLoader } from '../../core/services/translate-loader.service';
import { TranslateSync } from '../../core/services/translate-sync.service';
// for AOT
export function createTranslateLoader(http: HttpClient) {
	return translateLoader(http, ['flight']);
}

export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.FlightsPageComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(ROUTES),
		SharedModule,
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
		...fromComponents.components
	],
	providers: [TranslateSync]
})
export class FlightModule {
	constructor(private translateSync: TranslateSync) {
		this.translateSync.sync();
	}
}
