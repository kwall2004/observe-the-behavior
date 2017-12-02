import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/withLatestFrom';

import { ApiService } from '../../services/api.service';
import * as fromRoot from '../../store/reducers';
import * as AvailabilityActions from '../../store/availability/actions';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailabilityComponent implements OnInit {
  token$: Observable<string>;
  cities$: Observable<object>;
  data$: Observable<object>;
  origin$: Observable<string>;
  destination$: Observable<string>;
  beginDate$: Observable<Date>;

  constructor(
    private apiService: ApiService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.token$ = this.store.select(state => state.app.token);
    this.cities$ = this.store.select(state => state.availability.cities);
    this.data$ = this.store.select(state => state.availability.data);
    this.origin$ = this.store.select(state => state.availability.origin);
    this.destination$ = this.store.select(state => state.availability.destination);
    this.beginDate$ = this.store.select(state => state.availability.beginDate);

    this.token$
      .withLatestFrom(this.cities$)
      .subscribe(([token, cities]) => {
        if (token && !cities) {
          this.store.dispatch(new AvailabilityActions.GetCities());
        }
      });
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
