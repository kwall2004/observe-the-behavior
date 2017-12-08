import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as AppActions from '../../store/app/actions';
import * as BookingActions from '../../store/booking/actions';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingComponent implements OnInit {
  data$: Observable<object>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.booking.data);
  }

  commit() {
    this.store.dispatch(new BookingActions.Commit());
  }

  deleteToken() {
    this.store.dispatch(new AppActions.DeleteToken());
  }
}
