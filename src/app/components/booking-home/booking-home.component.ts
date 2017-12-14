import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookingPathComponent } from '../booking-path/booking-path.component';
import { TripListComponent } from '../trip-list/trip-list.component';
import { PassengerComponent } from '../../components/passenger/passenger.component';
import { ConfirmationComponent } from '../../components/confirmation/confirmation.component';

@Component({
  selector: 'app-booking-home',
  templateUrl: './booking-home.component.html',
  styleUrls: [ './booking-home.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingHomeComponent implements OnInit {
  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.routeConfig.children = [
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
    ];
  }

  ngOnInit() {
  }
}
