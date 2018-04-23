import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule } from 'ngx-progressbar';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { LayoutModule } from './features/layout';
import { HomeModule } from './features/home';
import { AuthModule } from './features/auth';
import { StaticContentModule } from './features/static-content';
import { AccountModule } from './features/account';
import { AppWildcardRoutingModule } from './app-wildcard-routing.module';

import { AppComponent } from './app.component';
import { StyleGuideModule } from './features/style-guide/styleguide.module';


@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NgProgressModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
		// non lazy loaded feature modules here
		LayoutModule,
		HomeModule,
		AuthModule,
		StaticContentModule,
		// todo add support for lazy loading(currently enrollment breaks it i think?)
		AccountModule,
		StyleGuideModule,
		AppWildcardRoutingModule
	],
	exports: [AppRoutingModule],
	bootstrap: [AppComponent]
})
export class AppModule { }
