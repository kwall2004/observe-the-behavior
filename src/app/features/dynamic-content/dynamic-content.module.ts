import { NgModule, Provider } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store';
import { effects } from './store/effects';

import { DYNAMIC_CONTENT_MAPPINGS } from './dynamic-content';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';
import { DynamicContentOneComponent } from './components/dynamic-content/one/dynamic-content-one.component';
import { DynamicContentTwoComponent } from './components/dynamic-content/two/dynamic-content-two.component';
import { DynamicContentThreeComponent } from './components/dynamic-content/three/dynamic-content-three.component';

import { DynamicContentApiService } from './services/dynamic-content-api.service';


export const DYNAMIC_CONTENT_COMPONENTS = [
  DynamicContentComponent,
  DynamicContentOneComponent,
  DynamicContentTwoComponent,
  DynamicContentThreeComponent
];

export const DYNAMIC_CONTENT_MAPPINGS_PROVIDER: Provider = [
  {
    provide: DYNAMIC_CONTENT_MAPPINGS,
    useValue: {
      'one': DynamicContentOneComponent,
      'two': DynamicContentTwoComponent,
      'three': DynamicContentThreeComponent
    }
  }
];

const ROUTES: Routes = [
  {
      path: '',
      component: DynamicContentComponent,
      children: [
        {
          path: '**',
          redirectTo: '',
          pathMatch: 'full'
        }
      ]
    },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('dynamicContent', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    ...DYNAMIC_CONTENT_COMPONENTS
  ],
  entryComponents: [
    ...DYNAMIC_CONTENT_COMPONENTS
  ],
  providers: [
    DYNAMIC_CONTENT_MAPPINGS_PROVIDER,
    DynamicContentApiService
  ]
})
export class DynamicContentModule {
  // public static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: DynamicContentModule,
  //     providers: [
  //     ]
  //   };
  // }
}
