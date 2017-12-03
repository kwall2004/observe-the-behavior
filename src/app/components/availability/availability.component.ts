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
  token$: Observable<string>;
  cities$: Observable<object>;
  data$: Observable<object>;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.errors$ = this.store.select(state => state.app.errors);
    this.token$ = this.store.select(state => state.app.token);
    this.cities$ = this.store.select(state => state.availability.cities);
    this.data$ = this.store.select(state => state.availability.data);

    this.token$
      .withLatestFrom(this.cities$)
      .subscribe(([token, cities]) => {
        if (token && !cities) {
          this.store.dispatch(new AvailabilityActions.GetCities());
        }
      });
  }
}
