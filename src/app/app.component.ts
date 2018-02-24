import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CoreState, appErrors, appLoading, AppStart, AppSetLoading, AvailabilityGetStations, BookingGetData } from './core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	errors$: Observable<any>;
	loading$: Observable<number>;

	constructor(private router: Router, private store: Store<CoreState>) {
		this.store.dispatch(new AppStart());
	}

	public ngOnInit() {
		this.errors$ = this.store.select(appErrors);
		this.loading$ = this.store.select(appLoading);

		this.router.events.subscribe(event => {
			if (event instanceof RouteConfigLoadStart) {
				this.store.dispatch(new AppSetLoading(true));
			} else if (event instanceof RouteConfigLoadEnd) {
				this.store.dispatch(new AppSetLoading(false));
			}
		});

		this.store.dispatch(new AvailabilityGetStations());
		this.store.dispatch(new BookingGetData({ showErrors: false }));
	}
}
