import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromComponents from './components';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'reservation-summary'
	},
	{
		path: 'reservation-summary',
		component: fromComponents.ReservationSummaryPageComponent
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
	{
		path: 'confirmation',
		loadChildren: 'app/features/confirmation/confirmation.module#ConfirmationModule'
	},
	{
		path: 'passenger',
		loadChildren: 'app/features/passenger/passenger.module#PassengerModule'
	},
	{
		path: 'travel-document',
		loadChildren: 'app/features/travel-document/travel-document.module#TravelDocumentModule'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ManageTravelRoutingModule { }
