// import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DYNAMIC_CONTENT_MAPPINGS } from './dynamic-content';
// import { DynamicContentOneComponent } from './components/dynamic-content/one/dynamic-content-one.component';
// import { DynamicContentTwoComponent } from './components/dynamic-content/two/dynamic-content-two.component';
// import { DynamicContentThreeComponent } from './components/dynamic-content/three/dynamic-content-three.component';

// export const DYNAMIC_CONTENT_COMPONENTS = [
//   DynamicContentOneComponent,
//   DynamicContentTwoComponent,
//   DynamicContentThreeComponent
// ];

// export const DYNAMIC_CONTENT_MAPPINGS_PROVIDER: Provider = [
//   {
//     provide: DYNAMIC_CONTENT_MAPPINGS,
//     useValue: {
//       'one': DynamicContentOneComponent,
//       'two': DynamicContentTwoComponent,
//       'three': DynamicContentThreeComponent
//     }
//   }
// ];

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: [
//     ...DYNAMIC_CONTENT_COMPONENTS
//   ],
//   entryComponents: [
//     ...DYNAMIC_CONTENT_COMPONENTS
//   ]
// })
// export class DynamicContentModule {
//   public static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: DynamicContentModule,
//       providers: [
//         DYNAMIC_CONTENT_MAPPINGS_PROVIDER
//       ]
//     };
//   }
// }
