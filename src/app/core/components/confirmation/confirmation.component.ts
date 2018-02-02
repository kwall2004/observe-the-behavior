import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CoreState } from '@app/core';
import * as BookingActions from '@app/core/store/actions/booking.action';

@Component({
	selector: 'app-confirmation',
	templateUrl: './confirmation.component.html',
	styleUrls: ['./confirmation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationComponent implements OnInit {
	data$: Observable<object>;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.data$ = this.store.select(state => state.booking.data);
	}

	onCommitClick() {
		this.store.dispatch(new BookingActions.Commit());
	}
}
