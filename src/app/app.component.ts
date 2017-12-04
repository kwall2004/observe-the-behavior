import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from 'primeng/primeng';
import { Store } from '@ngrx/store';

import * as fromRoot from './store/reducers';
import * as AppActions from './store/app/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  errors$: Observable<object>;
  token$: Observable<string>;
  menuItems: MenuItem[];

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  public ngOnInit() {
    this.token$ = this.store.select(state => state.app.token);
    this.errors$ = this.store.select(state => state.app.errors);

    this.menuItems = [
      {
        label: 'Availability',
        icon: 'fa fa-fw fa-plane',
        routerLink: ['/availability']
      },
      {
        label: 'Passenger',
        icon: 'fa fa-fw fa-users',
        routerLink: ['/passenger-add']
      },
      {
        label: 'Contact',
        icon: 'fa fa-fw fa-address-card-o',
        routerLink: ['/contact']
      }
    ];
    
    this.store.dispatch(new AppActions.SetToken(localStorage.getItem('token')));
  }

  getNewToken() {
    this.store.dispatch(new AppActions.GetToken());
  }
}
