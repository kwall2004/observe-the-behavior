import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

import { Trip } from '../../models/trip';
import { Journey } from '../../models/journey';
import { SellTrip } from '../../models/sellTrip';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyListComponent implements OnInit {
  @Input() trip: Trip;

  @Output() sellTrip = new EventEmitter<SellTrip>();

  constructor() { }

  ngOnInit() { }

  getFareKeys(journey: Journey) {
    return Object.keys(journey.fares);
  }

  onSellClick(journeyKey: string, fareKey: string) {
    this.sellTrip.emit({
      journeyKey: journeyKey,
      fareKey: fareKey
    });
  }
}
