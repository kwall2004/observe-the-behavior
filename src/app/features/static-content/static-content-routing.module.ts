import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromComponents from './components';

const routes: Routes = [
	{
		path: 'about-us',
		component: fromComponents.AboutComponent
	},
	{
		path: 'advertise',
		component: fromComponents.AdvertiseComponent
	},
	{
		path: 'morego-spirit',
		component: fromComponents.MoreGoComponent
	},
	{
		path: 'special-events',
		component: fromComponents.SpecialEventsComponent
	},
	{
		path: 'contact-us',
		component: fromComponents.ContactUsComponent
	},
	{
		path: 'group-travel',
		component: fromComponents.GroupTravelComponent
	},
	{
		path: 'legal',
		component: fromComponents.LegalComponent
	},
	{
		path: 'route-maps',
		component: fromComponents.RouteMapsComponent
	},
	{
		path: 'spirit-101',
		component: fromComponents.Spirit101Component
	},
	{
		path: 'press-release',
		component: fromComponents.PressReleaseComponent
	},
	{
		path: 'spirit-specials',
		component: fromComponents.SpiritSpecialsComponent
	},
	{
		path: 'careers-home',
		component: fromComponents.CareersHomeComponent
	},
	{
		path: 'customer-support',
		component: fromComponents.CustomerSupportComponent
	},
	{
		path: 'travel-advisory',
		component: fromComponents.TravelAdvisoryComponent
	},
	{
		path: 'fare-club-enrollment',
		component: fromComponents.FareClubEnrollmentComponent
	},
	{
		path: 'deals-everymundo',
		component: fromComponents.DealsEverymundoComponent
	},
	{
		/*
		QA Purposes Only
		*/
		path: 'static-qa',
		component: fromComponents.StaticQaComponent
	},
	{
		path: 'dedicated-partners',
		component: fromComponents.DedicatedPartnersComponent
	},



];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StaticContentRoutingModule { }
