import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store/reducers';
import * as AppActions from '../../store/app/actions';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  data$: Observable<object>;
  passengers: object[];

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.booking.data);
    this.data$.subscribe(data => {
      if (data) {
        this.passengers = [];
        Object.keys(data['data']['passengers']).forEach(key => {
          this.passengers.push(data['data']['passengers'][key]);
        });
      } 
    })
  }

  deleteToken() {
    this.store.dispatch(new AppActions.DeleteToken());
  }
}
