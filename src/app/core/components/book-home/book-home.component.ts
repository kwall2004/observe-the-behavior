import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CoreState, Station } from '@app/core';
import * as AppActions from '@app/core/store/actions/app.action';
import * as AvailabilityActions from '@app/core/store/actions/availability.action';

@Component({
	selector: 'app-book-home',
	templateUrl: './book-home.component.html',
	styleUrls: ['./book-home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookHomeComponent implements OnInit {
	stations$: Observable<[Station]>;
	origin$: Observable<Station>;
	destination$: Observable<Station>;
	beginDate$: Observable<Date>;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.stations$ = this.store.select(state => state.availability.stations);
		this.origin$ = this.store.select(state => state.availability.origin);
		this.destination$ = this.store.select(state => state.availability.destination);
		this.beginDate$ = this.store.select(state => state.availability.beginDate);
	}

	onOriginChange(value: Station) {
		this.store.dispatch(new AvailabilityActions.SetOrigin(value));
	}

	onDestinationChange(value: Station) {
		this.store.dispatch(new AvailabilityActions.SetDestination(value));
	}

	onBeginDateChange(value: Date) {
		this.store.dispatch(new AvailabilityActions.SetBeginDate(value));
	}

	onSearchClick() {
		this.store.dispatch(new AppActions.GetTokenData({ onlyIfBookingNotNull: true }));
		this.store.dispatch(new AvailabilityActions.ResetLowFareDate());
		this.store.dispatch(new AvailabilityActions.Search());
	}
}
