import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ApiService } from '../../services/api.service';
import { AvailabilityState } from '../../store/availability/availability.state';
import * as AvailabilityAction from '../../store/availability/availability.action';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailabilityComponent implements OnInit {
  token: string = null;
  startDate: Date;
  data$: Observable<object>;
  error$: Observable<object>;

  constructor(
    private apiService: ApiService,
    private store: Store<AvailabilityState>
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.data$ = this.store.select('data');
    this.error$ = this.store.select('error');
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
