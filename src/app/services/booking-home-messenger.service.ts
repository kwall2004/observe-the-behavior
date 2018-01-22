import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';
import { Observable } from 'rxjs/Observable';

import { Market } from '../models/market';
import { SellTrip } from '../models/sellTrip';
import { SavePassenger } from '../models/savePassenger';
import { SavePayment } from '../models/savePayment';

@Injectable()
export class BookingHomeMessengerService {
  private previousWeekClickSource = new Subject();
  private nextWeekClickSource = new Subject();
  private dayClickSource = new Subject<Market>();
  private sellTripClickSource = new Subject<SellTrip>();
  private savePassengerClickSource = new Subject<SavePassenger>();
  private savePaymentClickSource = new Subject<SavePayment>();
  private commitClickSource = new Subject();

  previousWeekClick$ = this.previousWeekClickSource.asObservable();
  nextWeekClick$ = this.nextWeekClickSource.asObservable();
  dayClick$ = this.dayClickSource.asObservable();
  sellTripClick$ = this.sellTripClickSource.asObservable();
  savePassengerClick$ = this.savePassengerClickSource.asObservable();
  savePaymentClick$ = this.savePaymentClickSource.asObservable();
  commitClick$ = this.commitClickSource.asObservable();

  constructor() { }

  public availabilityBeginDate$: Observable<Date>;
  public lowFareData$: Observable<object>;
  public availabilityData$: Observable<object>;
  public bookingData$: Observable<object>;

  public previousWeekClick() {
    this.previousWeekClickSource.next();
  }

  public nextWeekClick() {
    this.nextWeekClickSource.next();
  }

  public dayClick(market: Market) {
    this.dayClickSource.next(market);
  }

  public sellTripClick(sellTrip: SellTrip) {
    this.sellTripClickSource.next(sellTrip);
  }

  public savePassengerClick(savePassenger: SavePassenger) {
    this.savePassengerClickSource.next(savePassenger);
  }

  public savePaymentClick(savePayment: SavePayment) {
    this.savePaymentClickSource.next(savePayment);
  }

  public commitClick() {
    this.commitClickSource.next();
  }
}
