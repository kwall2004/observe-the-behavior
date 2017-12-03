import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as AvailabilityActions from '../../store/availability/actions';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.scss']
})
export class JourneyListComponent implements OnInit {
  @Input()
  trip: object;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() { }

  sell(journey: object) {
    this.store.dispatch(new AvailabilityActions.SellTrip({
      journey: journey
    }));
  }
}
