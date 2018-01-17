import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('accountNumber') accountNumber: ElementRef;
  @ViewChild('accountHolderName') accountHolderName: ElementRef;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
  }

  save() {
    this.store.dispatch(new BookingActions.SavePayment({
      accountNumber: this.accountNumber.nativeElement.value,
      accountHolderName: this.accountHolderName.nativeElement.value
    }));
  }
}
