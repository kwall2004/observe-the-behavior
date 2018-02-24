import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { LayoutModule } from './features/layout';
import { HomeModule } from './features/home';
import { AuthModule } from './features/auth';
import { StaticContentModule } from './features/static-content';
import { AccountModule } from './features/account';

import { AppComponent } from './app.component';
import { AppWildcardRoutingModule } from './app-wildcard-routing.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
		LayoutModule,
		// non lazy loaded feature modules here
		HomeModule,
		AuthModule,
		StaticContentModule,
		AccountModule,
		AppWildcardRoutingModule
	],
	exports: [AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
