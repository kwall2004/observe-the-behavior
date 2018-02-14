import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { reducers, effects } from './store';

import * as fromComponents from './components';
import { SignInComponent } from './components';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';

// export const ROUTES: Routes = [];

@NgModule({
	imports: [
		SharedModule,
		// RouterModule.forChild(ROUTES),
		// StoreModule.forFeature('seats', reducers),
		// EffectsModule.forFeature(effects),
	],
	providers: [],
	declarations: [SignInComponent, AuthDialogComponent],
	exports: [SignInComponent],
	entryComponents: [AuthDialogComponent]
})
export class AuthModule { }
