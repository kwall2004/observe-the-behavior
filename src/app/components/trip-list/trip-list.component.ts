import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityAction from '../../store/availability/actions';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  data$: Observable<object>;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.availability.data);
  }
}
