import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BookingHomeComponent } from './components/booking-home/booking-home.component';
import { BookingPathComponent } from './components/booking-path/booking-path.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'book',
        component: BookingHomeComponent,
      },
      {
        path: '',
        redirectTo: 'book',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'book',
    component: BookingPathComponent,
    children: [
      {
        path: 'trip-list',
        component: TripListComponent
      },
      {
        path: 'passenger',
        component: PassengerComponent
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
    component: DynamicContentComponent,
    children: [
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
