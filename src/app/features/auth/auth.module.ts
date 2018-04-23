import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared';

import * as fromComponents from './components';

// export const ROUTES: Routes = [];

@NgModule({
	imports: [
		SharedModule,
		// RouterModule.forChild(ROUTES),
	],
	providers: [],
	declarations: [...fromComponents.components],
	exports: [...fromComponents.components],
	entryComponents: [fromComponents.AuthModalComponent]
})
export class AuthModule { }
