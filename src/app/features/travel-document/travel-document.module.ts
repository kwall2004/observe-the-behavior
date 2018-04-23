import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { environment } from '../../../environments/environment';
import { SharedModule } from '../../shared/shared.module';
import * as fromComponents from './components';

import { translateLoader } from '../../core/services/translate-loader.service';
import { TranslateSync } from '../../core/services/translate-sync.service';
import { missingTranslateHandler } from '../../shared/utilities/missing-translate.utility';

import { ModalModule } from 'ngx-bootstrap';
import { TravelDocumentMiddleNameComponent } from './../../shared/components/travel-document-middle-name/travel-document-middle-name.component';
import { PassportInitialEntryPipe } from './pipes/passport-intial-entry.pipe';


// for AOT
export function createTranslateLoader(http: HttpClient) {
	return translateLoader(http, ['bag']);
}

export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.TravelDocumentPageComponent
	}
];

@NgModule({
	imports: [
		ModalModule.forRoot(),
		SharedModule,
		RouterModule.forChild(ROUTES),
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
	providers: [TranslateSync],
	declarations: [...fromComponents.components, PassportInitialEntryPipe],
	exports: [],
	entryComponents: [TravelDocumentMiddleNameComponent]
})
export class TravelDocumentModule {
	constructor(private translateSync: TranslateSync) {
		this.translateSync.sync();
	}


}
