import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { CoreState,	AppStart, AppSetLoading, ResourceGetStations, appLoadingState } from './core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	subs: Subscription[] = [];

	loading$: Observable<number>;
	loading = 0;

	constructor(
		private progress: NgProgress,
		private router: Router,
		private store: Store<CoreState>
	) {
		this.store.dispatch(new AppStart());
	}

	public ngOnInit() {
		this.loading$ = this.store.select(appLoadingState);

		this.router.events.subscribe(event => {
			if (event instanceof RouteConfigLoadStart) {
				this.store.dispatch(new AppSetLoading(true));
			} else if (event instanceof RouteConfigLoadEnd) {
				this.store.dispatch(new AppSetLoading(false));
			}
		});

		this.subs.push(this.loading$.subscribe(loading => {
			this.loading = loading;

			if (loading > 0) {
				this.progress.start();
			} else {
				this.progress.done();
			}
		}));

		this.store.dispatch(new ResourceGetStations());
	}

	ngOnDestroy() {
		this.subs.forEach(sub => sub.unsubscribe());
	}
}
