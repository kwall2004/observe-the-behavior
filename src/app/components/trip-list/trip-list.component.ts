import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BookingHomeMessengerService } from '../../services/booking-home-messenger.service';

import { SellTrip } from '../../models/sellTrip';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripListComponent implements OnInit {
  constructor(private messengerService: BookingHomeMessengerService) { }

  ngOnInit() { }

  onSellTrip(event: SellTrip) {
    this.messengerService.sellTripClick(event);
  }
}
