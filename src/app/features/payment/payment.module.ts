import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared';

import * as fromComponents from './components';


export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.PaymentPageComponent
	}
];

@NgModule({
	imports: [
		SharedModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [...fromComponents.components]
})
export class PaymentModule { }
