import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ApiService } from '../../services/api.service';
import * as fromRoot from '../../store/reducers';
import * as AppActions from '../../store/app/actions';
import * as AvailabilityActions from '../../store/availability/actions';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailabilityComponent implements OnInit {
  token$: Observable<string>;
  startDate: Date;
  data$: Observable<object>;
  error$: Observable<object>;

  constructor(
    private apiService: ApiService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.token$ = this.store.select(state => state.app.token);
    this.data$ = this.store.select(state => state.availability.data);
    this.error$ = this.store.select(state => state.availability.error);
  }

  getNewToken() {
    this.store.dispatch(new AppActions.GetToken());
  }

  getFlights() {
    this.store.dispatch(new AvailabilityActions.GetFlights({
      startDate: this.startDate
    }));
  }
}
