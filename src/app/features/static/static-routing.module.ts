import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '@app/features/static/components/about/about.component';
import { AdvertiseComponent } from '@app/features/static/components/advertise/advertise.component';
import { MoreGoComponent } from './components/more-go/more-go.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
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



const routes: Routes = [
	{
		path: 'about-us',
		component: AboutComponent
	},
	{
		path: 'advertise',
		component: AdvertiseComponent
	},
	{
		path: 'morego-spirit',
		component: MoreGoComponent
	},
	{
		path: 'special-events',
		component: SpecialEventsComponent
	},
	{
		path: 'contact-us',
		component: ContactUsComponent
	},
	{
		path: 'group-travel',
		component: GroupTravelComponent
	},
	{
		path: 'legal',
		component: LegalComponent
	},
	{
		path: 'options',
		component: OptionsComponent
	},
	{
		path: 'route-maps',
		component: RouteMapsComponent
	},
	{
		path: 'spirit-101',
		component: Spirit101Component
	},
	{
		path: 'press-release',
		component: PressReleaseComponent
	},
	{
		path: 'spirit-specials',
		component: SpiritSpecialsComponent
	},
	{
		path: 'careers-home',
		component: CareersHomeComponent
	},
	{
		path: 'customer-support',
		component: CustomerSupportComponent
	},











];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StaticRoutingModule { }
