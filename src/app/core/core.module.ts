import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { environment } from '@env/environment';
import { SharedModule } from '../shared/shared.module';

// ngrx
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './store/reducers/router.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store'; // todo figure out why effects coming from store causes circular dep
import { effects } from './store/effects';

// export const metaReducers: MetaReducer<any>[] = [];

// services
import { NavitaireApiService } from './services/navitaire-api.service';
import { ApiInterceptorService } from './services/api-interceptor.service';

import * as fromComponents from './components';
import { CultureChangeComponent } from './components/culture-change/culture-change.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { translateLoader } from './services/translate-loader.service';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
	return translateLoader(http, ['home']);
}

@NgModule({
	imports: [
		SharedModule,
		HttpClientModule,
		RouterModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
			}
		}),
		// ngrx
		StoreModule.forRoot(reducers),
		StoreRouterConnectingModule,
		EffectsModule.forRoot(effects),
		!environment.production ? StoreDevtoolsModule.instrument({
			maxAge: 20
		}) : []
	],
	declarations: [...fromComponents.components],
	providers: [
		{
			provide: RouterStateSerializer,
			useClass: CustomSerializer
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiInterceptorService,
			multi: true
		},
		NavitaireApiService
	],
	// core probably shouldn't have any exports, but until the header component is pulled out of the app.module it needs to export
	exports: [CultureChangeComponent]
})
export class CoreModule {
	constructor(
		@Optional()
		@SkipSelf()
		parentModule: CoreModule
	) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import only in AppModule');
		}
	}
}
