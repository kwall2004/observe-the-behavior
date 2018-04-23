import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { NgxBootstrapModule } from './ngx-bootstrap.module';
import { ToastrModule } from 'ngx-toastr';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './store/reducers/router.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers, effects } from './store';

// services
import { ApiInterceptorService } from './services/api-interceptor.service';
import * as fromDotRez from './services/dot-rez';
import { LocalStorageService } from './services/local-storage.service';

import * as fromComponents from './components';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { translateLoader } from './services/translate-loader.service';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
	return translateLoader(http, ['home', 'layout', 'account', 'auth']);
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
			},
			isolate: true
		}),
		StoreModule.forRoot(reducers, { metaReducers }),
		StoreRouterConnectingModule,
		EffectsModule.forRoot(effects),
		!environment.production ? StoreDevtoolsModule.instrument({
			maxAge: 50
		}) : [],
		NgxBootstrapModule,
		ToastrModule.forRoot()
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
		...fromDotRez.services,
		LocalStorageService
	]
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
