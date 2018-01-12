import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityActions from '../../store/availability/actions';

@Component({
  selector: 'app-low-fare',
  templateUrl: './low-fare.component.html',
  styleUrls: ['./low-fare.component.scss']
})
export class LowFareComponent implements OnInit {
  lowFareBeginDate$: Observable<Date>;
  lowFareData$: Observable<object>;
  beginDate: Date;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.lowFareBeginDate$ = this.store.select(state => state.availability.lowFareBeginDate);
    this.lowFareData$ = this.store.select(state => state.availability.lowFareData);
    this.store.select(state => state.availability.beginDate)
      .subscribe(beginDate => {
        this.beginDate = beginDate;
      });
  }

  isSameAsBeginDate(value: string) {
    return moment(value).isSame(this.beginDate);
  }

  getNextWeek() {
    this.store.dispatch(new AvailabilityActions.AddWeekToLowFareBeginDate());
  }

  getPreviousWeek() {
    this.store.dispatch(new AvailabilityActions.SubtractWeekFromLowFareBeginDate());
  }

  setBeginDateAndSearch(market) {
    this.store.dispatch(new AvailabilityActions.SetBeginDate(moment(market.departureDate).toDate()));
    this.store.dispatch(new AvailabilityActions.Search());
  }
}
