import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/withLatestFrom';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityActions from '../../store/availability/actions';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailabilityComponent implements OnInit {
  errors$: Observable<object[]>;
  cities$: Observable<object>;
  loading$: Observable<boolean>;
  data$: Observable<object>;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.errors$ = this.store.select(state => state.app.errors);
    this.cities$ = this.store.select(state => state.availability.cities);
    this.loading$ = this.store.select(state => state.availability.loading);
    this.data$ = this.store.select(state => state.availability.data);
  }
}
