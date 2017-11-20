import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ApiService } from '../../services/api.service';
import * as fromRoot from '../../store/reducers';
import * as AvailabilityAction from '../../store/availability/actions';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailabilityComponent implements OnInit {
  token: string;
  token$: Observable<string>;
  startDate: Date;
  data$: Observable<object>;
  error$: Observable<object>;

  constructor(
    private apiService: ApiService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.token$ = this.store.select(state => state.root.token);
    this.data$ = this.store.select(state => state.availability.data);
    this.error$ = this.store.select(state => state.availability.error);
  }

  getNewToken() {
    this.apiService
      .token()
      .subscribe((json) => {
        this.token = json.data.token;
        localStorage.setItem('token', this.token);
      });
  }

  getFlights() {
    this.error$.subscribe((error) => console.log(error));
    this.store.dispatch(new AvailabilityAction.GetFlights({
      startDate: this.startDate
    }));
  }
}
