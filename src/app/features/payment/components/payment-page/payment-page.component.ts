import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { CoreState, booking, BookingAddPayment } from '../../../../core';

@Component({
	selector: 'app-payment-page',
	templateUrl: './payment-page.component.html',
	styleUrls: ['./payment-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentPageComponent implements OnInit {
	booking$: Observable<number>;
	payment = {
		accountNumber: '',
		name: ''
	};

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.booking$ = this.store.pipe(select(booking));
	}

	onSaveClick(form) {
		this.store.dispatch(new BookingAddPayment({
			accountNumber: form.value.accountNumber,
			accountHolderName: form.value.name
		}));
	}
}
