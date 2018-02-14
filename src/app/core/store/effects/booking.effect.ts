import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import { withLatestFrom, mergeMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

import * as fromRoot from '../reducers';
import * as AppActions from '../actions/app.action';
import * as BookingActions from '../actions/booking.action';
import { NavitaireApiService } from '../../services/navitaire-api.service';

@Injectable()
export class BookingEffects {
	constructor(
		private api: NavitaireApiService,
		private actions: Actions,
		private router: Router,
		private store: Store<fromRoot.CoreState>
	) { }

	@Effect()
	savePassenger$: Observable<Action> = this.actions
		.ofType<BookingActions.SavePassenger>(BookingActions.SAVE_PASSENGER)
		.pipe(
			withLatestFrom(this.store),
			mergeMap(([action, state]) => {
				const passengerKey = Object.keys(state.booking.data.passengers)[0];

				this.store.dispatch(new AppActions.ClearErrors());
				return this.api.savePassenger(
					passengerKey,
					action.payload.name.first,
					action.payload.name.last
				)
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppActions.AddError(error));
							return empty();
						})
					);
			}),
			map(() => new BookingActions.GetData()),
			tap(() => this.router.navigateByUrl('/book/bag'))
		);

	@Effect()
	savePrimaryContact$: Observable<Action> = this.actions
		.ofType<BookingActions.SavePrimaryContact>(BookingActions.SAVE_PRIMARY_CONTACT)
		.pipe(
			withLatestFrom(this.store),
			mergeMap(([action, state]) => {
				const contactKey = Object.keys(state.booking.data.contacts)[0];

				this.store.dispatch(new AppActions.ClearErrors());
				if (contactKey === '') {
					return this.api.addPrimaryContact(
						action.payload.name.first,
						action.payload.name.last,
						action.payload.phoneNumbers[0].number
					)
						.pipe(
							catchError(error => {
								this.store.dispatch(new AppActions.AddError(error));
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
								this.store.dispatch(new AppActions.AddError(error));
								return empty();
							})
						);
				}
			}),
			map(() => new BookingActions.GetData()),
			tap(() => this.router.navigateByUrl('/book/bag'))
		);

	@Effect()
	savePayment$: Observable<Action> = this.actions
		.ofType<BookingActions.SavePayment>(BookingActions.SAVE_PAYMENT)
		.pipe(
			mergeMap(action => {
				this.store.dispatch(new AppActions.ClearErrors());
				return this.api.addPayment(
					action.payload.accountNumber,
					action.payload.accountHolderName
				)
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppActions.AddError(error));
							return empty();
						})
					);
			}),
			map(() => new BookingActions.GetData()),
			tap(() => this.router.navigateByUrl('/book/confirmation'))
		);

	@Effect()
	getData$: Observable<Action> = this.actions
		.ofType<BookingActions.GetData>(BookingActions.GET_DATA)
		.pipe(
			mergeMap(action => {
				this.store.dispatch(new AppActions.ClearErrors());
				return this.api.getBooking()
					.pipe(
						catchError(error => {
							if (action.payload && action.payload.showErrors) {
								this.store.dispatch(new AppActions.AddError(error));
							}
							return of(null);
						})
					);
			}),
			map(payload => new BookingActions.SetData(payload && payload.data))
		);

	@Effect()
	commit$: Observable<Action> = this.actions
		.ofType<BookingActions.Commit>(BookingActions.COMMIT)
		.pipe(
			mergeMap(action => {
				this.store.dispatch(new AppActions.ClearErrors());
				return this.api.commitBooking()
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppActions.AddError(error));
							return empty();
						})
					);
			}),
			map(() => new BookingActions.GetData())
		);
}
