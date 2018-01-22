import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BookingHomeMessengerService } from '../../services/booking-home-messenger.service';

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
  @ViewChild('contactPhoneNumber') contactPhoneNumber;

  constructor(private messengerService: BookingHomeMessengerService) { }

  ngOnInit() { }

  save() {
    this.messengerService.savePassengerClick({
      firstName: this.firstName.nativeElement.value,
      lastName: this.lastName.nativeElement.value,
      contact: {
        firstName: this.contactFirstName.nativeElement.value,
        lastName: this.contactLastName.nativeElement.value,
        phoneNumber: this.contactPhoneNumber.inputViewChild.nativeElement.value
      }
    });
  }
}
