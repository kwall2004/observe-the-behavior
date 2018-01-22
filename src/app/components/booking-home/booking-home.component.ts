import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityActions from '../../store/availability/actions';

@Component({
  selector: 'app-booking-home',
  templateUrl: './booking-home.component.html',
  styleUrls: [ './booking-home.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingHomeComponent implements OnInit {
  stations$: Observable<object>;
  origin$: Observable<object>;
  destination$: Observable<object>;
  beginDate$: Observable<Date>;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.stations$ = this.store.select(state => state.availability.stations);
    this.origin$ = this.store.select(state => state.availability.origin);
    this.destination$ = this.store.select(state => state.availability.destination);
    this.beginDate$ = this.store.select(state => state.availability.beginDate);
   }

  onOriginChange(event) {
    this.store.dispatch(new AvailabilityActions.SetOrigin(event.value));
  }

  onDestinationChange(event) {
    this.store.dispatch(new AvailabilityActions.SetDestination(event.value));
  }

  onBeginDateChange(value) {
    this.store.dispatch(new AvailabilityActions.SetLowFareBeginDate(value));
    this.store.dispatch(new AvailabilityActions.SetBeginDate(value));
  }

  onSearchClick() {
    this.store.dispatch(new AvailabilityActions.SearchLowFare());
    this.store.dispatch(new AvailabilityActions.Search());
  }
}
