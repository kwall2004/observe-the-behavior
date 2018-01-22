import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { BookingHomeMessengerService } from '../../services/booking-home-messenger.service';

@Component({
  selector: 'app-low-fare',
  templateUrl: './low-fare.component.html',
  styleUrls: ['./low-fare.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LowFareComponent implements OnInit {
  availabilityBeginDate: Date;

  constructor(private messengerService: BookingHomeMessengerService) { }

  ngOnInit() {
    this.messengerService.availabilityBeginDate$.subscribe(date => {
      this.availabilityBeginDate = date;
    });
  }

  isSameAsAvailabilityBeginDate(value: string) {
    return moment(value).isSame(this.availabilityBeginDate);
  }

  onPreviousWeekClick() {
    this.messengerService.previousWeekClick();
  }

  onNextWeekClick() {
    this.messengerService.nextWeekClick();
  }

  onDayClick(market) {
    this.messengerService.dayClick(market);
  }
}
