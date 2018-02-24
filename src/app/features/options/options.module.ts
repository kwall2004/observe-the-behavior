import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import * as fromComponents from './components';

export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.OptionsComponent
	}
];

@NgModule({
	imports: [
		SharedModule,
		RouterModule.forChild(ROUTES),
	],
	providers: [],
	declarations: [
		...fromComponents.components
	],
	exports: [],
})
export class OptionsModule { }
