import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { DayClick } from '../../models/dayClick';

@Component({
  selector: 'app-low-fare',
  templateUrl: './low-fare.component.html',
  styleUrls: ['./low-fare.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LowFareComponent implements OnInit {
  @Input() beginDate$: Observable<Date>;
  @Input() data$: Observable<object>;

  @Output() previousWeekClick = new EventEmitter();
  @Output() nextWeekClick = new EventEmitter();
  @Output() dayClick = new EventEmitter<DayClick>();

  beginDate: Date;

  constructor() { }

  ngOnInit() {
    this.beginDate$.subscribe(date => {
      this.beginDate = date;
    });
  }

  isSameAsDate(value: string) {
    return moment(value).isSame(this.beginDate);
  }

  onPreviousWeekClick() {
    this.previousWeekClick.emit();
  }

  onNextWeekClick() {
    this.nextWeekClick.emit();
  }

  onDayClick(market) {
    this.dayClick.emit({
      date: moment(market.departureDate).toDate()
    });
  }
}
