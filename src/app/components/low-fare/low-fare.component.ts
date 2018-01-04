import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';

@Component({
  selector: 'app-low-fare',
  templateUrl: './low-fare.component.html',
  styleUrls: ['./low-fare.component.scss']
})
export class LowFareComponent implements OnInit {
  lowFareData$: Observable<object>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.lowFareData$ = this.store.select(state => state.availability.lowFareData);
  }
}
