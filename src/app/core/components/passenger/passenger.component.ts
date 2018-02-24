import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CoreState, booking, BookingSavePassenger, BookingSavePrimaryContact } from '../../store';

@Component({
	selector: 'app-passenger',
	templateUrl: './passenger.component.html',
	styleUrls: ['./passenger.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassengerComponent implements OnInit {
	data$: Observable<any>;
	mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.data$ = this.store.select(booking);
	}

	onSaveClick(form) {
		this.store.dispatch(new BookingSavePassenger({
			name: {
				first: form.value.firstName,
				last: form.value.lastName
			}
		}));
		this.store.dispatch(new BookingSavePrimaryContact({
			name: {
				first: form.value.contactFirstName,
				last: form.value.contactLastName,
			},
			phoneNumbers: [
				{
					number: form.value.contactPrimaryPhone
				}
			]
		}));
	}
}
