import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import {CoreState} from '@app/core';
import * as AppActions from '@app/core/store/actions/app.action';
import * as AvailabilityActions from '@app/core/store/actions/availability.action';
import * as BookingActions from '@app/core/store/actions/booking.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  errors$: Observable<object>;
  token$: Observable<string>;
  loading$: Observable<number>;

  constructor(private store: Store<CoreState>) { }

  public ngOnInit() {
    this.token$ = this.store.select(state => state.app.token);
    this.errors$ = this.store.select(state => state.app.errors);
    this.loading$ = this.store.select(state => state.app.loading);

    this.store.dispatch(new AvailabilityActions.GetStations());
    this.store.dispatch(new BookingActions.GetData({ showErrors: false }));
  }

  getNewToken() {
    this.store.dispatch(new AppActions.GetToken());
  }
}
