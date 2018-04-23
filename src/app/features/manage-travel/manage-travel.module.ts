import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { ManageTravelRoutingModule } from './manage-travel-routing.module';
import * as fromComponents from './components';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { environment } from '../../../environments/environment';
import { translateLoader } from '../../core/services/translate-loader.service';
import { TranslateSync } from '../../core/services/translate-sync.service';
import { missingTranslateHandler } from '../../shared/utilities/missing-translate.utility';
import { ModalModule } from 'ngx-bootstrap';
// for AOT
export function createTranslateLoader(http: HttpClient) {
	return translateLoader(http, ['manage-travel']);
}

@NgModule({
	imports: [
		SharedModule,
		ManageTravelRoutingModule,
		ModalModule.forRoot(),
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
			},
			isolate: true,
			missingTranslationHandler: !environment.production ? missingTranslateHandler : [],
		})
	],
	entryComponents: [fromComponents.HazmatAcceptanceModalComponent],
	providers: [TranslateSync],
	declarations: [...fromComponents.components]
})
export class ManageTravelModule {
	constructor(private translateSync: TranslateSync) {
		this.translateSync.sync();
	}
}
