import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CoreState } from '@app/core';
import * as AppActions from '@app/core/store/actions/app.action';
import * as AvailabilityActions from '@app/core/store/actions/availability.action';
import * as BookingActions from '@app/core/store/actions/booking.action';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	errors$: Observable<any>;
	loading$: Observable<number>;

	constructor(private router: Router,	private store: Store<CoreState>) {
		this.store.dispatch(new AppActions.AppStart());
	}

	public ngOnInit() {
		this.errors$ = this.store.select(state => state.app.errors);
		this.loading$ = this.store.select(state => state.app.loading);

		this.router.events.subscribe(event => {
			if (event instanceof RouteConfigLoadStart) {
				this.store.dispatch(new AppActions.SetLoading(true));
			} else if (event instanceof RouteConfigLoadEnd) {
				this.store.dispatch(new AppActions.SetLoading(false));
			}
		});

		this.store.dispatch(new AvailabilityActions.GetStations());
		this.store.dispatch(new BookingActions.GetData({ showErrors: false }));
	}
}
