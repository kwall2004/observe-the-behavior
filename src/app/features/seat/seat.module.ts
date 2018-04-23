import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import * as fromComponents from './components';
import { ModalModule } from 'ngx-bootstrap';

export const ROUTES: Routes = [
	{
		path: '',
		component: fromComponents.SeatsPageComponent
	}
];

@NgModule({
	imports: [
		ModalModule.forRoot(),
		SharedModule,
		RouterModule.forChild(ROUTES)
	],
	providers: [],
	declarations: [...fromComponents.components],
	exports: [],
	entryComponents: [fromComponents.ExitSeatModalComponent]
})
export class SeatModule { }
