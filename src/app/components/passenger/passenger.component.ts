import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { InputMask } from 'primeng/primeng';

import * as fromRoot from '../../store/reducers';
import * as BookingActions from '../../store/booking/actions';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassengerComponent implements OnInit {
  @ViewChild('firstName') firstName: ElementRef;
  @ViewChild('lastName') lastName: ElementRef;
  @ViewChild('contactFirstName') contactFirstName: ElementRef;
  @ViewChild('contactLastName') contactLastName: ElementRef;
  @ViewChild('contactPhoneNumber') contactPhoneNumber: InputMask;

  data$: Observable<object>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.booking.data);
  }

  onSaveClick(firstName, lastName, contactFirstName, contactLastName, contactPhoneNumber) {
    this.store.dispatch(new BookingActions.SavePassenger({
      name: {
        first: firstName.value,
        last: lastName.value
      }
    }));
    this.store.dispatch(new BookingActions.SavePrimaryContact({
      name: {
        first: contactFirstName.value,
        last: contactLastName.value,
      },
      phoneNumbers: [
        {
          number: contactPhoneNumber.value
        }
      ]
    }));
  }
}
