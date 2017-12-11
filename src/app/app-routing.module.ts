import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingHomeComponent } from './components/booking-home/booking-home.component';
import { BookingPathComponent } from './components/booking-path/booking-path.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const routes: Routes = [
  {
    path: 'booking-home',
    component: BookingHomeComponent,
    children: [
      {
        path: 'booking-path',
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
            path: 'confirmation',
            component: ConfirmationComponent
          },
          {
            path: '',
            redirectTo: 'trip-list',
            pathMatch: 'full'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/booking-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
