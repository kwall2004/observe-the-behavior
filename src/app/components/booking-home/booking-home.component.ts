import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import { BookingHomeMessengerService } from '../../services/booking-home-messenger.service';
import { Market } from '../../models/market';
import { SellTrip } from '../../models/sellTrip';
import { SavePassenger } from '../../models/savePassenger';
import { SavePayment } from '../../models/savePayment';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityActions from '../../store/availability/actions';
import * as BookingActions from '../../store/booking/actions';

@Component({
  selector: 'app-booking-home',
  templateUrl: './booking-home.component.html',
  styleUrls: ['./booking-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BookingHomeMessengerService]
})
export class BookingHomeComponent implements OnInit {
  stations$: Observable<object>;
  origin$: Observable<object>;
  destination$: Observable<object>;
  beginDate$: Observable<Date>;

  constructor(
    private store: Store<fromRoot.State>,
    private messengerService: BookingHomeMessengerService
  ) { }

  ngOnInit() {
    this.stations$ = this.store.select(state => state.availability.stations);
    this.origin$ = this.store.select(state => state.availability.origin);
    this.destination$ = this.store.select(state => state.availability.destination);
    this.beginDate$ = this.store.select(state => state.availability.beginDate);

    this.messengerService.availabilityBeginDate$ = this.beginDate$;
    this.messengerService.lowFareData$ = this.store.select(state => state.availability.lowFareData);
    this.messengerService.availabilityData$ = this.store.select(state => state.availability.data);
    this.messengerService.bookingData$ = this.store.select(state => state.booking.data);

    this.messengerService.previousWeekClick$.subscribe(() => {
      this.store.dispatch(new AvailabilityActions.SubtractWeekFromLowFareDate());
    });
    this.messengerService.nextWeekClick$.subscribe(() => {
      this.store.dispatch(new AvailabilityActions.AddWeekToLowFareDate());
    });
    this.messengerService.dayClick$.subscribe((market: Market) => {
      this.store.dispatch(new AvailabilityActions.SetBeginDate(moment(market.departureDate).toDate()));
      this.store.dispatch(new AvailabilityActions.Search());
    });
    this.messengerService.sellTripClick$.subscribe((sellTrip: SellTrip) => {
      this.store.dispatch(new AvailabilityActions.SellTrip({
        journeyKey: sellTrip.journeyKey,
        fareKey: sellTrip.fareKey
      }));
    });

    this.messengerService.savePassengerClick$.subscribe((savePassenger: SavePassenger) => {
      this.store.dispatch(new BookingActions.SavePassenger({
        firstName: savePassenger.firstName,
        lastName: savePassenger.lastName
      }));
      this.store.dispatch(new BookingActions.SavePrimaryContact({
        firstName: savePassenger.contact.firstName,
        lastName: savePassenger.contact.lastName,
        phoneNumber: savePassenger.contact.phoneNumber
      }));
    });

    this.messengerService.savePaymentClick$.subscribe((savePayment: SavePayment) => {
      this.store.dispatch(new BookingActions.SavePayment({
        accountNumber: savePayment.accountNumber,
        accountHolderName: savePayment.accountHolderName
      }));
    });

    this.messengerService.commitClick$.subscribe(() => {
      this.store.dispatch(new BookingActions.Commit());
    });
  }

  onOriginChange(event) {
    this.store.dispatch(new AvailabilityActions.SetOrigin(event.value));
  }

  onDestinationChange(event) {
    this.store.dispatch(new AvailabilityActions.SetDestination(event.value));
  }

  onBeginDateChange(value) {
    this.store.dispatch(new AvailabilityActions.SetLowFareDate(value));
    this.store.dispatch(new AvailabilityActions.SetBeginDate(value));
  }

  onSearchClick() {
    this.store.dispatch(new AvailabilityActions.SearchLowFare());
    this.store.dispatch(new AvailabilityActions.Search());
  }
}
