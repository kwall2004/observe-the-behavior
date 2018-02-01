import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from '@env/environment';

import { SharedModule } from '../shared/shared.module';

// ngrx
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';
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
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [...fromComponents.components],
  providers: [{
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
