import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import * as fromComponents from './components';
import { translateLoader } from '../../core/services/translate-loader.service';
import { TranslateSync } from '../../core/services/translate-sync.service';
// for AOT
export function createTranslateLoader(http: HttpClient) {
	return translateLoader(http, ['options']);
}

export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.OptionsPageComponent
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
			isolate: true,
		}),

		// this isn't being imported otherwise
		ModalModule.forRoot()
	],
	declarations: [
		...fromComponents.components
	],
	providers: [TranslateSync],
	entryComponents: [fromComponents.ShortcutSecurityModalComponent]
})
export class OptionsModule {
	constructor(private translateSync: TranslateSync) {
		this.translateSync.sync();
	}
}
