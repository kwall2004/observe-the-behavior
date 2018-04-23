import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';

import * as fromComponents from './components';

import { reducers, effects } from './store';


export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.OptionalServicesPageComponent
	}
];

@NgModule({
	imports: [
		SharedModule,
		RouterModule.forChild(ROUTES),
		StoreModule.forFeature('optionalServices', reducers),
		EffectsModule.forFeature(effects)
	],
	providers: [],
	declarations: [...fromComponents.components],
	exports: [],
})
export class OptionalServicesModule { }
