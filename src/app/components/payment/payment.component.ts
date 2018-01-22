import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BookingHomeMessengerService } from '../../services/booking-home-messenger.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent implements OnInit {
  @ViewChild('accountNumber') accountNumber: ElementRef;
  @ViewChild('accountHolderName') accountHolderName: ElementRef;

  constructor(private messengerService: BookingHomeMessengerService) { }

  ngOnInit() { }

  save() {
    this.messengerService.savePaymentClick({
      accountNumber: this.accountNumber.nativeElement.value,
      accountHolderName: this.accountHolderName.nativeElement.value
    });
  }
}
