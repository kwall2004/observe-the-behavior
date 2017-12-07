import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as BookingActions from '../../store/booking/actions';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {
  passengers$: Observable<object[]>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.passengers$ = this.store.select(state => state.booking.passengers);
  }

  setFirstName(event) {
    this.store.dispatch(new BookingActions.SetPassengerFirstName(event.target.value));
  }

  setLastName(event) {
    this.store.dispatch(new BookingActions.SetPassengerLastName(event.target.value));
  }

  save() {
    this.store.dispatch(new BookingActions.SavePassenger());
  }
}
