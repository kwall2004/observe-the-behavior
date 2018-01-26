import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

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
  @ViewChild('contactPhoneNumber') contactPhoneNumber: ElementRef;

  data$: Observable<object>;
  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.booking.data);
  }

  onSaveClick(form) {
    this.store.dispatch(new BookingActions.SavePassenger({
      name: {
        first: form.value['first-name'],
        last: form.value['last-name']
      }
    }));
    this.store.dispatch(new BookingActions.SavePrimaryContact({
      name: {
        first: form.value['contact-first-name'],
        last: form.value['contact-last-name'],
      },
      phoneNumbers: [
        {
          number: form.value['contact-phone-number']
        }
      ]
    }));
  }
}
