import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityActions from '../../store/availability/actions';

import { Station } from '../../models/station';

@Component({
  selector: 'app-booking-home',
  templateUrl: './booking-home.component.html',
  styleUrls: ['./booking-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingHomeComponent implements OnInit {
  stations$: Observable<[Station]>;
  origin$: Observable<Station>;
  destination$: Observable<Station>;
  beginDate$: Observable<Date>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.stations$ = this.store.select(state => state.availability.stations);
    this.origin$ = this.store.select(state => state.availability.origin);
    this.destination$ = this.store.select(state => state.availability.destination);
    this.beginDate$ = this.store.select(state => state.availability.beginDate);
  }

  onOriginChange(value: Station) {
    this.store.dispatch(new AvailabilityActions.SetOrigin(value));
  }

  onDestinationChange(value: Station) {
    this.store.dispatch(new AvailabilityActions.SetDestination(value));
  }

  onBeginDateChange(value: Date) {
    this.store.dispatch(new AvailabilityActions.SetBeginDate(value));
  }

  onSearchClick() {
    this.store.dispatch(new AvailabilityActions.ResetLowFareDate());
    this.store.dispatch(new AvailabilityActions.Search());
  }
}
