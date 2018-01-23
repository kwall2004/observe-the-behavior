import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from 'primeng/primeng';
import { Store } from '@ngrx/store';

import * as fromRoot from './store/reducers';
import * as AppActions from './store/app/actions';
import * as AvailabilityActions from './store/availability/actions';
import * as BookingActions from './store/booking/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  errors$: Observable<object>;
  token$: Observable<string>;
  loading$: Observable<number>;
  menuItems: MenuItem[];

  constructor(private store: Store<fromRoot.State>) { }

  public ngOnInit() {
    this.token$ = this.store.select(state => state.app.token);
    this.errors$ = this.store.select(state => state.app.errors);
    this.loading$ = this.store.select(state => state.app.loading);

    this.menuItems = [
      {
        label: 'Book',
        routerLink: ['home/booking-home']
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
      },
      {
        label: 'Dynamic Content',
        routerLink: ['dynamic-content']
      },
      {
        label: 'Get New Token',
        command: (onclick) => { this.getNewToken(); }
      }
    ];

    this.store.dispatch(new AvailabilityActions.GetStations());
    this.store.dispatch(new BookingActions.GetData({ showErrors: false }));
  }

  getNewToken() {
    this.store.dispatch(new AppActions.GetToken());
  }
}
