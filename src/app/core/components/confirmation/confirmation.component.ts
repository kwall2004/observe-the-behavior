import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CoreState, booking, BookingCommit } from '../../store';

@Component({
	selector: 'app-confirmation',
	templateUrl: './confirmation.component.html',
	styleUrls: ['./confirmation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationComponent implements OnInit {
	data$: Observable<any>;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.data$ = this.store.select(booking);
	}

	onCommitClick() {
		this.store.dispatch(new BookingCommit());
	}
}
