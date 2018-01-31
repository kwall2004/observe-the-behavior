import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Station } from '@app/core';

@Component({
  selector: 'app-availability-search',
  templateUrl: './availability-search.component.html',
  styleUrls: ['./availability-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailabilitySearchComponent implements OnInit {
  @Input() stations: [Station];
  @Input() origin: Station;
  @Input() destination: Station;
  @Input() beginDate: Date;

  @Output() originChange = new EventEmitter<Station>();
  @Output() destinationChange = new EventEmitter<Station>();
  @Output() beginDateChange = new EventEmitter<Date>();
  @Output() searchClick = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onOriginChange(event) {
    this.originChange.emit(event.value);
  }

  onDestinationChange(event) {
    this.destinationChange.emit(event.value);
  }

  onBeginDateChange(event) {
    this.beginDateChange.emit(event.value);
  }

  onSearchClick() {
    this.searchClick.emit();
  }
}
