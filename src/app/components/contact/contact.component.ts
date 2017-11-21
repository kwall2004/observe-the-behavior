import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  bookingData$: Observable<object>;
  JSON: object;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.bookingData$ = this.store.select(state => state.booking.data);
    this.JSON = JSON;
  }
}
