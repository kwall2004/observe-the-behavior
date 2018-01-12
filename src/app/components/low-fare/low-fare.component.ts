import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityActions from '../../store/availability/actions';

@Component({
  selector: 'app-low-fare',
  templateUrl: './low-fare.component.html',
  styleUrls: ['./low-fare.component.scss']
})
export class LowFareComponent implements OnInit {
  lowFareBeginDate$: Observable<object>;
  lowFareData$: Observable<object>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.lowFareBeginDate$ = this.store.select(state => state.availability.lowFareBeginDate);
    this.lowFareData$ = this.store.select(state => state.availability.lowFareData);
  }

  getNextWeek() {
    this.store.dispatch(new AvailabilityActions.AddWeekToLowFareBeginDate());
  }

  getPreviousWeek() {
    this.store.dispatch(new AvailabilityActions.SubtractWeekFromLowFareBeginDate());
  }
}
