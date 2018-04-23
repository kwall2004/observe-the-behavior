import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';

import { reducers, effects } from './store';
import * as fromComponents from './components';
import { ModalModule } from 'ngx-bootstrap';
import { HttpClient } from '@angular/common/http';
import { translateLoader } from '../../core/services/translate-loader.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateSync } from '../../core/services/translate-sync.service';

export function createTranslateLoader(http: HttpClient) {
	return translateLoader(http, ['flight-status']);
}

export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.FlightStatusPageComponent
	},
];

@NgModule({
	imports: [
		SharedModule,
		RouterModule.forChild(ROUTES),
		StoreModule.forFeature('flightStatus', reducers),
		EffectsModule.forFeature(effects),
		ModalModule.forRoot(),
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
	providers: [
		TranslateSync
	],
	entryComponents: [
		fromComponents.FlightStatusSubscriptionModalComponent
	]
})
export class FlightStatusModule {
	constructor(private translateSync: TranslateSync) {
		this.translateSync.sync();
	}
}
