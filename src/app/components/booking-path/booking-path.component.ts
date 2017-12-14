import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-booking-path',
  templateUrl: './booking-path.component.html',
  styleUrls: [ './booking-path.component.scss' ]
})
export class BookingPathComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() { }

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
