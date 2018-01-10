import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneyListComponent implements OnInit {
  @Input() trip: object;
  @Output() onSell = new EventEmitter<object>();

  constructor() { }

  ngOnInit() { }

  getFares(journey: object) {
    return Object.keys(journey['fares']);
  }

  sell(journey: object) {
    this.onSell.emit(journey);
  }
}
