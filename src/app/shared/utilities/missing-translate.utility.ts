import { MissingTranslationHandler } from '@ngx-translate/core';
import { MissingTranslationHandlerParams } from '@ngx-translate/core';
import { Provider } from '@angular/core';

class MyMissingTranslationHandler implements MissingTranslationHandler {
	handle(params: MissingTranslationHandlerParams) {
		if (params) { }
		// todo write code to translate missing keys and write to a file that will give missing translations for translator.
	}
}

export const missingTranslateHandler: Provider = { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler };
