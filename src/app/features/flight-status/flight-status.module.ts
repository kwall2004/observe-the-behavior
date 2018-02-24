import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { effects, reducers } from './store';
import { FlightStatusPageComponent } from './components/flight-status-page/flight-status-page.component';

export const ROUTES: Routes = [
	{
		path: '',
		component: FlightStatusPageComponent
	},
];

@NgModule({
	imports: [
		SharedModule,
		RouterModule.forChild(ROUTES),
		// StoreModule.forFeature('flightStatus', reducers),
		// EffectsModule.forFeature(effects)
	],
	declarations: [FlightStatusPageComponent]
})
export class FlightStatusModule { }
