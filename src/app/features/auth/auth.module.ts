import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { reducers, effects } from './store';

import * as fromComponents from './components';

// export const ROUTES: Routes = [];

@NgModule({
	imports: [
		SharedModule,
		// RouterModule.forChild(ROUTES),
		// StoreModule.forFeature('seats', reducers),
		// EffectsModule.forFeature(effects),
	],
	providers: [],
	declarations: [...fromComponents.components],
	exports: [...fromComponents.components],
	entryComponents: [fromComponents.AuthDialogComponent]
})
export class AuthModule { }