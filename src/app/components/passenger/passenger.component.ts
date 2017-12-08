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
  data$: Observable<object>;
  passenger: object;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.booking.data);
    this.data$.subscribe(data => {
      if (data) {
        const passengerKey = Object.keys(data['passengers'])[0];
        this.passenger = data['passengers'][passengerKey];
      } else {
        this.passenger = null;
      }
    });
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
