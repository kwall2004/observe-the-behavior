import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Book',
        routerLink: ['booking-home']
      },
      {
        label: 'My Trips',
        routerLink: ['my-trips']
      },
      {
        label: 'Check In',
        routerLink: ['check-in']
      },
      {
        label: 'Flight Status',
        routerLink: ['flight-status']
      }
    ];
  }
}
