import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookingPathComponent } from '../booking-path/booking-path.component';
import { TripListComponent } from '../trip-list/trip-list.component';

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
        component: BookingPathComponent
        children: [
          {
            path: 'trip-list',
            component: TripListComponent
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
