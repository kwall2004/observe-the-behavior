import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromComponents from './components';

export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.CarsPageComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(ROUTES)
	],
	declarations: [
		fromComponents.CarsPageComponent
	]
})
export class CarModule { }
