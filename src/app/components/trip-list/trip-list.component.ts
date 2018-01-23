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
  stations$: Observable<object>;
  origin$: Observable<object>;
  destination$: Observable<object>;
  beginDate$: Observable<Date>;
  lowFareData$: Observable<object>;
  data$: Observable<object>;

  newSearch = false;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.stations$ = this.store.select(state => state.availability.stations);
    this.origin$ = this.store.select(state => state.availability.origin);
    this.destination$ = this.store.select(state => state.availability.destination);
    this.beginDate$ = this.store.select(state => state.availability.beginDate);
    this.lowFareData$ = this.store.select(state => state.availability.lowFareData);
    this.data$ = this.store.select(state => state.availability.data);
  }

  onNewSearchClick() {
    this.newSearch = true;
  }

  onOriginChange(event) {
    this.store.dispatch(new AvailabilityActions.SetOrigin(event.value));
  }

  onDestinationChange(event) {
    this.store.dispatch(new AvailabilityActions.SetDestination(event.value));
  }

  onBeginDateChange(value) {
    this.store.dispatch(new AvailabilityActions.SetBeginDate(value));
  }

  onSearchClick() {
    this.store.dispatch(new AvailabilityActions.ResetLowFareDate());
    this.store.dispatch(new AvailabilityActions.Search());
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
