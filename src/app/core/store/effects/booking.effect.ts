import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import { withLatestFrom, mergeMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

import { CoreState } from '../../store/reducers';

import {
	AppClearErrors, AppAddError,
	BookingActionTypes, BookingSavePassenger, BookingGetData, BookingSavePrimaryContact, BookingAddPayment, BookingSetData, BookingCommit
} from '../../store/actions';

import { NavitaireApiService } from '../../services/navitaire-api.service';

@Injectable()
export class BookingEffects {
	constructor(
		private api: NavitaireApiService,
		private actions: Actions,
		private router: Router,
		private store: Store<CoreState>
	) { }

	@Effect()
	savePassenger$: Observable<Action> = this.actions
		.ofType<BookingSavePassenger>(BookingActionTypes.SAVE_PASSENGER)
		.pipe(
			withLatestFrom(this.store),
			mergeMap(([action, state]) => {
				const passengerKey = Object.keys(state.booking.data.passengers)[0];

				this.store.dispatch(new AppClearErrors());
				return this.api.savePassenger(
					passengerKey,
					action.payload.name.first,
					action.payload.name.last
				)
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppAddError(error));
							return empty();
						})
					);
			}),
			map(() => new BookingGetData()),
			tap(() => this.router.navigateByUrl('/book/bags'))
		);

	@Effect()
	savePrimaryContact$: Observable<Action> = this.actions
		.ofType<BookingSavePrimaryContact>(BookingActionTypes.SAVE_PRIMARY_CONTACT)
		.pipe(
			withLatestFrom(this.store),
			mergeMap(([action, state]) => {
				const contactKey = Object.keys(state.booking.data.contacts)[0];

				this.store.dispatch(new AppClearErrors());
				if (contactKey === '') {
					return this.api.addPrimaryContact(
						action.payload.name.first,
						action.payload.name.last,
						action.payload.phoneNumbers[0].number
					)
						.pipe(
							catchError(error => {
								this.store.dispatch(new AppAddError(error));
								return empty();
							})
						);
				} else {
					return this.api.savePrimaryContact(
						action.payload.name.first,
						action.payload.name.last,
						action.payload.phoneNumbers[0].number
					)
						.pipe(
							catchError(error => {
								this.store.dispatch(new AppAddError(error));
								return empty();
							})
						);
				}
			}),
			map(() => new BookingGetData()),
			tap(() => this.router.navigateByUrl('/book/bags'))
		);

	@Effect()
	addPayment$: Observable<Action> = this.actions
		.ofType<BookingAddPayment>(BookingActionTypes.ADD_PAYMENT)
		.pipe(
			mergeMap(action => {
				this.store.dispatch(new AppClearErrors());
				return this.api.addPayment(
					action.payload.accountNumber,
					action.payload.accountHolderName
				)
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppAddError(error));
							return empty();
						})
					);
			}),
			map(() => new BookingGetData()),
			tap(() => this.router.navigateByUrl('/confirmation'))
		);

	@Effect()
	getData$: Observable<Action> = this.actions
		.ofType<BookingGetData>(BookingActionTypes.GET_DATA)
		.pipe(
			mergeMap(action => {
				this.store.dispatch(new AppClearErrors());
				return this.api.getBooking()
					.pipe(
						catchError(error => {
							if (action.payload && action.payload.showErrors) {
								this.store.dispatch(new AppAddError(error));
							}
							return of(null);
						})
					);
			}),
			map(payload => new BookingSetData(payload && payload.data))
		);

	@Effect()
	commit$: Observable<Action> = this.actions
		.ofType<BookingCommit>(BookingActionTypes.COMMIT)
		.pipe(
			mergeMap(action => {
				this.store.dispatch(new AppClearErrors());
				return this.api.commitBooking()
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppAddError(error));
							return empty();
						})
					);
			}),
			map(() => new BookingGetData())
		);
}
