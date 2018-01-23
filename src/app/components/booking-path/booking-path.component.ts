import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-booking-path',
  templateUrl: './booking-path.component.html',
  styleUrls: ['./booking-path.component.scss']
})
export class BookingPathComponent implements OnInit {
  menuItems: MenuItem[];
  activeIndex = 0;

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Flight',
        icon: 'fa fa-fw fa-plane',
        routerLink: ['trip-list'],
        command: () => {
          this.activeIndex = 0;
        }
      },
      {
        label: 'Passenger',
        icon: 'fa fa-fw fa-user',
        routerLink: ['passenger'],
        command: () => {
          this.activeIndex = 1;
        }
      },
      {
        label: 'Payment',
        icon: 'fa fa-fw fa-credit-card',
        routerLink: ['payment'],
        command: () => {
          this.activeIndex = 2;
        }
      },
      {
        label: 'Confirmation',
        icon: 'fa fa-fw fa-file-text',
        routerLink: ['confirmation'],
        command: () => {
          this.activeIndex = 3;
        }
      }
    ];
  }
}
