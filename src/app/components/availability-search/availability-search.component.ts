import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-availability-search',
  templateUrl: './availability-search.component.html',
  styleUrls: [ './availability-search.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailabilitySearchComponent implements OnInit {
  @Input() stations$: Observable<object>;
  @Input() origin$: Observable<object>;
  @Input() destination$: Observable<object>;
  @Input() beginDate$: Observable<Date>;

  @Output() originChange = new EventEmitter<object>();
  @Output() destinationChange = new EventEmitter<object>();
  @Output() beginDateChange = new EventEmitter<object>();
  @Output() searchClick = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onOriginChange(event) {
    this.originChange.emit(event);
  }

  onDestinationChange(event) {
    this.destinationChange.emit(event);
  }

  onBeginDateChange(value) {
    this.beginDateChange.emit(value);
  }

  onSearchClick() {
    this.searchClick.emit();
  }
}
