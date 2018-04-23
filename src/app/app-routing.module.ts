import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { BookPathComponent } from './core';
import { HomePageComponent } from './features/home';
import { AccountLoginPageComponent } from './features/auth';
import { AccountEnrollmentComponent } from './features/account';
import { StyleGuideComponent } from './features/style-guide/style-guide/style-guide.component';


const routes: Routes = [
	{
		path: '',
		component: HomePageComponent
	},
	{
		path: 'book',
		component: BookPathComponent,
		children: [
			{
				path: 'flights',
				loadChildren: 'app/features/flight/flight.module#FlightModule',
			},
			{
				path: 'flights-cars',
				loadChildren: 'app/features/flight-car/flight-car.module#FlightCarModule'
			},
			{
				path: 'flights-hotels',
				loadChildren: 'app/features/flight-hotel/flight-hotel.module#FlightHotelModule'
			},
			{
				path: 'hotels',
				loadChildren: 'app/features/hotel/hotel.module#HotelModule'
			},
			{
				path: 'cars',
				loadChildren: 'app/features/car/car.module#CarModule'
			},
			{
				path: 'passenger',
				loadChildren: 'app/features/passenger/passenger.module#PassengerModule'
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
				path: 'confirmation',
				loadChildren: 'app/features/confirmation/confirmation.module#ConfirmationModule'
			},
			{
				path: '',
				redirectTo: 'flights',
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
		path: 'flight-status',
		loadChildren: 'app/features/flight-status/flight-status.module#FlightStatusModule'
	},
	{
		path: 'dynamic-content',
		loadChildren: 'app/features/dynamic-content/dynamic-content.module#DynamicContentModule'
	},
	{
		path: 'account',
		loadChildren: 'app/features/account/account.module#AccountModule'
	},
	{
		path: 'account-login',
		component: AccountLoginPageComponent
	},
	{
		path: 'account-enrollment',
		component: AccountEnrollmentComponent,
	},
	{
		path: 'retrieve-password',
		loadChildren: 'app/features/forgot-password/forgot-password.module#ForgotPasswordModule'
	},
	{
		path: 'optional-services',
		loadChildren: 'app/features/optional-services/optional-services.module#OptionalServicesModule'
	},
];

if (!environment.production) {
	routes.push({
		path: 'styleguide',
		component: StyleGuideComponent
	});
}

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
