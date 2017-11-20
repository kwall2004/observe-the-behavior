import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AvailabilityState } from '../../store/availability/availability.state';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  data: Observable<object>;

  constructor(
    private store: Store<AvailabilityState>
  ) { }

  ngOnInit() {
    this.data = this.store.select(state => state.data);
  }
}
