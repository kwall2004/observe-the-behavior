import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('firstName') firstName: ElementRef;
  @ViewChild('lastName') lastName: ElementRef;
  @ViewChild('contactFirstName') contactFirstName: ElementRef;
  @ViewChild('contactLastName') contactLastName: ElementRef;
  @ViewChild('contactPhoneNumber') contactPhoneNumber;

  data$: Observable<object>;
  passenger: object;
  contact: object;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.booking.data);
    this.data$.subscribe(data => {
      if (data) {
        const passengerKey = Object.keys(data['passengers'])[0],
          contactKey = Object.keys(data['contacts'])[0];
        this.passenger = data['passengers'][passengerKey];
        this.contact = data['contacts'][contactKey];
      } else {
        this.passenger = null;
        this.contact = null;
      }
    });
  }

  save() {
    this.store.dispatch(new BookingActions.SavePassenger({
      firstName: this.firstName.nativeElement.value,
      lastName: this.lastName.nativeElement.value
    }));
    this.store.dispatch(new BookingActions.SavePrimaryContact({
      firstName: this.contactFirstName.nativeElement.value,
      lastName: this.contactLastName.nativeElement.value,
      phoneNumber: this.contactPhoneNumber.inputViewChild.nativeElement.value
    }));
  }
}
