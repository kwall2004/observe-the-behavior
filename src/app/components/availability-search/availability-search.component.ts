import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Station } from '../../models/station';

@Component({
  selector: 'app-availability-search',
  templateUrl: './availability-search.component.html',
  styleUrls: ['./availability-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailabilitySearchComponent implements OnInit {
  @Input() stations$: Observable<[Station]>;
  @Input() origin$: Observable<Station>;
  @Input() destination$: Observable<Station>;
  @Input() beginDate$: Observable<Date>;

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

  onBeginDateChange(value) {
    this.beginDateChange.emit(value);
  }

  onSearchClick() {
    this.searchClick.emit();
  }
}
