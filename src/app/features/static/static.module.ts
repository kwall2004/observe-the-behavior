import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './components/about/about.component';
import { AdvertiseComponent } from './components/advertise/advertise.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { MoreGoComponent } from './components/more-go/more-go.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GroupTravelComponent } from './components/group-travel/group-travel.component';
import { LegalComponent } from './components/legal/legal.component';
import { OptionsComponent } from './components/options/options.component';
import { RouteMapsComponent } from './components/route-maps/route-maps.component';
import { Spirit101Component } from './components/spirit-101/spirit-101.component';
import { PressReleaseComponent } from './components/press-release/press-release.component';
import { SpiritSpecialsComponent } from './components/spirit-specials/spirit-specials.component';
import { CareersHomeComponent } from './components/careers-home/careers-home.component';
import { CustomerSupportComponent } from './components/customer-support/customer-support.component';


@NgModule({
	imports: [
		CommonModule,
		StaticRoutingModule
	],
	declarations: [
		AboutComponent,
		AdvertiseComponent,
		SpecialEventsComponent,
		MoreGoComponent,
		ContactUsComponent,
		GroupTravelComponent,
		LegalComponent,
		OptionsComponent,
		RouteMapsComponent,
		Spirit101Component,
		PressReleaseComponent,
		SpiritSpecialsComponent,
		CareersHomeComponent,
		CustomerSupportComponent,

	]
})
export class StaticModule { }
