import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

import * as fromComponents from './components';

// export const ROUTES: Routes = [];

@NgModule({
	imports: [
		SharedModule,
		// RouterModule.forChild(ROUTES),
		StoreModule.forFeature('home', reducers),
		EffectsModule.forFeature(effects)
	],
	declarations: [...fromComponents.components]
})
export class HomeModule { }
