import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromComponents from './components';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'itinerary'
	},
	{
		path: 'itinerary',
		component: fromComponents.ItineraryPageComponent
	},
	{
		path: 'seats',
		loadChildren: 'app/features/seat/seat.module#SeatModule'
	},
	{
		path: 'bags',
		loadChildren: 'app/features/bag/bag.module#BagModule'
	},
	{
		path: 'hazmat-terms-acceptance',
		component: fromComponents.HazmatAcceptanceComponent
	},
	{
		path: 'boarding-pass',
		component: fromComponents.BoardingPassComponent
	},
	{
		path: 'cancel-reservation',
		component: fromComponents.CancelReservationComponent
	},
	{
		path: 'payment',
		loadChildren: 'app/features/payment/payment.module#PaymentModule'
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ManageTravelRoutingModule { }
