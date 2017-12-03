import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityActions from '../../store/availability/actions';

@Component({
  selector: 'app-availability-search',
  templateUrl: './availability-search.component.html',
  styleUrls: ['./availability-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailabilitySearchComponent implements OnInit {
  cities$: Observable<object>;
  origin$: Observable<string>;
  destination$: Observable<string>;
  beginDate$: Observable<Date>;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.cities$ = this.store.select(state => state.availability.cities);
    this.origin$ = this.store.select(state => state.availability.origin);
    this.destination$ = this.store.select(state => state.availability.destination);
    this.beginDate$ = this.store.select(state => state.availability.beginDate);
  }

  setOrigin(event) {
    this.store.dispatch(new AvailabilityActions.SetOrigin(event.value));
  }

  setDestination(event) {
    this.store.dispatch(new AvailabilityActions.SetDestination(event.value));
  }

  setBeginDate(value) {
    this.store.dispatch(new AvailabilityActions.SetBeginDate(value));
  }

  search() {
    this.store.dispatch(new AvailabilityActions.Search());
  }
}
