import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CoreState } from '@app/core';
import * as BookingActions from '@app/core/store/actions/booking.action';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
	styleUrls: ['./payment.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent implements OnInit {
	payment = {
		accountNumber: '',
		name: ''
	};

	constructor(private store: Store<CoreState>) { }

	ngOnInit() { }

	onSaveClick(form) {
		this.store.dispatch(new BookingActions.SavePayment({
			accountNumber: form.value.accountNumber,
			accountHolderName: form.value.name
		}));
	}
}
