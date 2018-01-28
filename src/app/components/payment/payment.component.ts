import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as BookingActions from '../../store/booking/actions';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent implements OnInit {
  payment = {
    accountNumber: '',
    name: ''
  };

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() { }

  onSaveClick(form) {
    this.store.dispatch(new BookingActions.SavePayment({
      accountNumber: form.value.accountNumber,
      accountHolderName: form.value.name
    }));
  }
}
