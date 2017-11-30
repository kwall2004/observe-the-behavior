import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './store/reducers';
import * as AppActions from './store/app/actions';
import * as AvailabilityActions from './store/availability/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromRoot.State>
  ) { }

  public ngOnInit() {
    this.store.select(state => state.app.token)
      .subscribe(() => {
        this.store.dispatch(new AvailabilityActions.GetCities());
      });
    this.store.dispatch(new AppActions.SetToken(localStorage.getItem('token')));
  }
}
