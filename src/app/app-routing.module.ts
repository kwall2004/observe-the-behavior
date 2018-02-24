import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
	BookPathComponent,
	TripListComponent,
	PassengerComponent,
	ConfirmationComponent,
} from './core';

import { HomeComponent } from './features/home';
import { AccountLoginComponent } from './features/auth';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'book',
		component: BookPathComponent,
		children: [
			{
				path: 'availability',
				component: TripListComponent,
			},
			{
				path: 'hotel',
				loadChildren: 'app/features/hotel/hotel.module#HotelModule'
			},
			{
				path: 'car',
				loadChildren: 'app/features/car/car.module#CarModule'
			},
			{
				path: 'passenger',
				component: PassengerComponent
			},
			{
				path: 'bags',
				loadChildren: 'app/features/bag/bag.module#BagModule'
			},
			{
				path: 'seats',
				loadChildren: 'app/features/seat/seat.module#SeatModule'
			},
			{
				path: 'options',
				loadChildren: 'app/features/options/options.module#OptionsModule'
			},
			{
				path: 'payment',
				loadChildren: 'app/features/payment/payment.module#PaymentModule'
			},
			{
				path: '',
				redirectTo: 'availability',
				pathMatch: 'full'
			}
		]
	},
	{
		path: 'my-trips',
		loadChildren: 'app/features/manage-travel/manage-travel.module#ManageTravelModule'
	},
	{
		path: 'check-in',
		loadChildren: 'app/features/manage-travel/manage-travel.module#ManageTravelModule'
	},
	{
		path: 'confirmation',
		component: ConfirmationComponent
	},
	{
		path: 'flight-status',
		loadChildren: 'app/features/flight-status/flight-status.module#FlightStatusModule'
	},
	{
		path: 'dynamic-content',
		loadChildren: 'app/features/dynamic-content/dynamic-content.module#DynamicContentModule'
	},
	{
		path: 'free-spirit',
		loadChildren: 'app/features/account/account.module#AccountModule'
	},
	{
		path: 'free-spirit-login',
		component: AccountLoginComponent
	},
	{
		path: 'forgot-password',
		loadChildren: 'app/features/forgot-password/forgot-password.module#ForgotPasswordModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
