import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from 'primeng/primeng';
import { Store } from '@ngrx/store';

import * as fromRoot from './store/reducers';
import * as AppActions from './store/app/actions';
import * as BookingActions from './store/booking/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
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
        label: 'Availability',
        icon: 'fa fa-fw fa-plane',
        routerLink: ['/availability']
      },
      {
        label: 'Passenger',
        icon: 'fa fa-fw fa-user',
        routerLink: ['/passenger']
      },
      {
        label: 'Booking',
        icon: 'fa fa-fw fa-file-text',
        routerLink: ['/booking']
      }
    ];

    this.store.dispatch(new AppActions.SetToken(localStorage.getItem('token')));
    this.store.dispatch(new BookingActions.GetData());
  }

  getNewToken() {
    this.store.dispatch(new AppActions.GetToken());
  }
}
