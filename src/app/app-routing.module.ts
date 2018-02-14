import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
	HomeComponent,
	BookHomeComponent,
	BookPathComponent,
	TripListComponent,
	PassengerComponent,
	PaymentComponent,
	ConfirmationComponent,
	MyTripsComponent,
	CheckInComponent
} from '@app/core';
import { FlightStatusHomeComponent } from '@app/features/flight-status/components/flight-status-home/flight-status-home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: '',
				component: BookHomeComponent,
			},
			{
				path: 'my-trips',
				component: MyTripsComponent,
			},
			{
				path: 'check-in',
				component: CheckInComponent,
			},
			{
				path: 'flight-status',
				component: FlightStatusHomeComponent
			}
		]
	},
	{
		path: 'book',
		component: BookPathComponent,
		children: [
			{
				path: 'trip-list',
				component: TripListComponent,
			},
			{
				path: 'passenger',
				component: PassengerComponent
			},
			{
				path: 'bag',
				loadChildren: 'app/features/bag/bag.module#BagModule'
			},
			{
				path: 'seat',
				loadChildren: 'app/features/seat/seat.module#SeatModule'
			},
			{
				path: 'payment',
				component: PaymentComponent
			},
			{
				path: 'confirmation',
				component: ConfirmationComponent
			},
			{
				path: '',
				redirectTo: 'trip-list',
				pathMatch: 'full'
			}
		]
	},
	{
		path: 'dynamic-content',
		loadChildren: 'app/features/dynamic-content/dynamic-content.module#DynamicContentModule'
	},
	// todo implement not found
	// {
	// 	path: '**',
	// 	component: NotFoundComponent
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
