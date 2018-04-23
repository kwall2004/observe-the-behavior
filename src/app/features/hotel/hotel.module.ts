import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromComponents from './components';

export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.HotelsPageComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(ROUTES)
	],
	declarations: [
		fromComponents.HotelsPageComponent
	]
})
export class HotelModule { }
