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
  CheckInComponent,
  FlightStatusComponent,
} from '@app/core';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'book',
        component: BookHomeComponent,
      },
      {
        path: 'my-trips',
        component: MyTripsComponent
      },
      {
        path: 'check-in',
        component: CheckInComponent
      },
      {
        path: 'flight-status',
        component: FlightStatusComponent
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
    component: BookPathComponent,
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
  // {
  //   path: 'dynamic-content',
  //   component: DynamicContentComponent,
  //   children: [
  //     {
  //       path: '**',
  //       redirectTo: '',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
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
export class AppRoutingModule { }
