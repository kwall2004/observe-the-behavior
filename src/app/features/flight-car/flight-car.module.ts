import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared';

import * as fromComponents from './components';

export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.FlightsCarsPageComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(ROUTES),
		SharedModule
	],
	declarations: [
		...fromComponents.components
	]
})
export class FlightCarModule { }
