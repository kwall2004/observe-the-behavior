import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/primeng';

import { TripListComponent } from '../../components/trip-list/trip-list.component';
import { PassengerComponent } from '../../components/passenger/passenger.component';
import { ConfirmationComponent } from '../../components/confirmation/confirmation.component';

@Component({
  selector: 'app-booking-path',
  templateUrl: './booking-path.component.html',
  styleUrls: [ './booking-path.component.scss' ]
})
export class BookingPathComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.routeConfig.children = [
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
    ];
   }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Flight',
        icon: 'fa fa-fw fa-plane',
        routerLink: [ 'trip-list' ]
      },
      {
        label: 'Passenger',
        icon: 'fa fa-fw fa-user',
        routerLink: [ 'passenger' ]
      },
      {
        label: 'Confirmation',
        icon: 'fa fa-fw fa-file-text',
        routerLink: [ 'confirmation' ]
      }
    ];
  }
}
