import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import { DayClick } from '../../models/dayClick';
import { SellTripClick } from '../../models/sellTripClick';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityActions from '../../store/availability/actions';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripListComponent implements OnInit {
  beginDate$: Observable<Date>;
  lowFareData$: Observable<object>;
  data$: Observable<object>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.beginDate$ = this.store.select(state => state.availability.beginDate);
    this.lowFareData$ = this.store.select(state => state.availability.lowFareData);
    this.data$ = this.store.select(state => state.availability.data);
  }

  onPreviousWeekClick() {
    this.store.dispatch(new AvailabilityActions.SubtractWeekFromLowFareDate());
  }

  onNextWeekClick() {
    this.store.dispatch(new AvailabilityActions.AddWeekToLowFareDate());
  }

  onDayClick(dayClick: DayClick) {
    this.store.dispatch(new AvailabilityActions.SetBeginDate(dayClick.date));
    this.store.dispatch(new AvailabilityActions.Search());
  }

  onSellTripClick(event: SellTripClick) {
    this.store.dispatch(new AvailabilityActions.SellTrip({
      journeyKey: event.journeyKey,
      fareKey: event.fareKey
    }));
  }
}
