import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

import * as fromComponents from './components';
import { RetrievePasswordInstructionComponent } from '../../shared/components';
import { ResetPasswordService } from './services/reset-password.service';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { translateLoader } from '../../core/services/translate-loader.service';
import { TranslateSync } from '../../core/services/translate-sync.service';
import { missingTranslateHandler } from '../../shared/utilities/missing-translate.utility';

export function createTranslateLoader(http: HttpClient) {
	return translateLoader(http, ['forgot-password']);
}

@NgModule({
	imports: [
		SharedModule,
		ForgotPasswordRoutingModule,
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
	entryComponents: [RetrievePasswordInstructionComponent],
	declarations: [...fromComponents.components],
	providers: [ResetPasswordService, TranslateSync]
})

export class ForgotPasswordModule {
	constructor(private translateSync: TranslateSync) {
		this.translateSync.sync();
	}
}
