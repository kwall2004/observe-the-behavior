import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

import { Trip } from '../../models/trip';
import { Journey } from '../../models/journey';
import { TripSell } from '../../models/tripSell';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyListComponent implements OnInit {
  @Input() trip: Trip;

  @Output() tripSell = new EventEmitter<TripSell>();

  constructor() { }

  ngOnInit() { }

  getFareKeys(journey: Journey) {
    return Object.keys(journey.fares);
  }

  onSellClick(journeyKey: string, fareKey: string) {
    this.tripSell.emit({
      journeyKey: journeyKey,
      fareKey: fareKey
    });
  }
}
