import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityAction from '../../store/availability/actions';

import { TripSell } from '../../models/tripSell';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripListComponent implements OnInit {
  data$: Observable<object>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.availability.data);
  }

  onTripSell(event: TripSell) {
    this.store.dispatch(new AvailabilityAction.SellTrip({
      journeyKey: event.journeyKey,
      fareKey: event.fareKey
    }));
  }
}
