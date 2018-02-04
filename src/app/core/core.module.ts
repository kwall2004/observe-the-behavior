import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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

@NgModule({
	imports: [
		SharedModule,
		HttpClientModule,
		RouterModule,
		// ngrx
		StoreModule.forRoot(reducers),
		StoreRouterConnectingModule,
		EffectsModule.forRoot(effects),
		!environment.production ? StoreDevtoolsModule.instrument({
			maxAge: 10
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
		NavitaireApiService]
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
