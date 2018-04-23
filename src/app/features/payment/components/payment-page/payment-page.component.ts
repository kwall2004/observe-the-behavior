import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { CoreState, bookingState, BookingAddPayment, authLoggedInState, contactFullAddressStringState } from '../../../../core';
import { StateModel, CountryModel } from '../../../../shared';

@Component({
	selector: 'app-payment-page',
	templateUrl: './payment-page.component.html',
	styleUrls: ['./payment-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [StateModel, CountryModel]
})
export class PaymentPageComponent implements OnInit, OnDestroy {
	loggedIn: Subscription;
	booking$: Observable<any>;
	useSameAddress = true;
	saveCard: boolean;
	isLoggedIn: boolean;
	contactAddress: string;
	stateList: any[];
	countryList: any[];

	constructor(
		private store: Store<CoreState>,
		private state: StateModel,
		private country: CountryModel
	) {
		this.stateList = this.state.list;
		this.countryList = this.country.list;
	}

	ngOnInit() {
		this.booking$ = this.store.select(bookingState);
		this.store.select(authLoggedInState).subscribe((loggedIn) => this.isLoggedIn = loggedIn);
		this.store.select(contactFullAddressStringState).subscribe((name) => this.contactAddress = name);
	}

	onSaveClick(form) {
		const request = new BookingAddPayment({
			accountNumber: form.value.accountNumber,
			accountHolderName: form.value.nameOnCard,
			expiryDate: form.value.expirationMonth + '/01/' + form.value.expirationYear, // We are not getting expiry day from UI so hard coded to first day of the month
			verificationCode: form.value.securityCode,
			amount: 0, // Todo - Hard coded 0 for thi siteration, will implement the actual logic in future iterations
			currencyCode: 'USD',
			saveCard: this.saveCard,
			address: this.contactAddress
		});

		this.store.dispatch(request);
	}

	onChangeAddress(event) {
		this.useSameAddress = event.srcElement.checked;
	}

	onSaveCardClick(event) {
		this.saveCard = event.srcElement.checked;
	}

	ngOnDestroy() {
		if (this.loggedIn) {
			this.loggedIn.unsubscribe();
		}
	}
}
