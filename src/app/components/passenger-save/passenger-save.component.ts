import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as BookingActions from '../../store/booking/actions';

@Component({
  selector: 'app-passenger-save',
  templateUrl: './passenger-save.component.html',
  styleUrls: ['./passenger-save.component.scss']
})
export class PassengerSaveComponent implements OnInit {
  data$: Observable<object>;
  firstName: string;
  lastName: string;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.booking.data);
  }

  save() {
    this.store.dispatch(new BookingActions.SavePassenger({
      firstName: this.firstName,
      lastName: this.lastName
    }));
  }
}
