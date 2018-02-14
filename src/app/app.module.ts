import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@app/core';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './features/auth/auth.module';
import { StaticModule } from './features/static/static.module';

import { AppComponent } from './app.component';
import { FlightStatusModule } from '@app/features/flight-status/flight-status.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
		// non lazy loaded feature modules here
		AuthModule,
		StaticModule,
		FlightStatusModule
	],
	exports: [AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
