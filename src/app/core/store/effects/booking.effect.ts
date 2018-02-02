import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';

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
		.withLatestFrom(this.store)
		.mergeMap(([action, state]) => {
			const passengerKey = Object.keys(state.booking.data['passengers'])[0];

			this.store.dispatch(new AppActions.ClearErrors());
			return this.api.savePassenger(
				passengerKey,
				action.payload.name.first,
				action.payload.name.last
			)
				.catch(error => {
					this.store.dispatch(new AppActions.AddError(error));
					return Observable.empty();
				});
		})
		.map(() => new BookingActions.GetData())
		.do(() => this.router.navigateByUrl('/book/payment'));

	@Effect()
	savePrimaryContact$: Observable<Action> = this.actions
		.ofType<BookingActions.SavePrimaryContact>(BookingActions.SAVE_PRIMARY_CONTACT)
		.withLatestFrom(this.store)
		.mergeMap(([action, state]) => {
			const contactKey = Object.keys(state.booking.data['contacts'])[0];

			this.store.dispatch(new AppActions.ClearErrors());
			if (contactKey === '') {
				return this.api.addPrimaryContact(
					action.payload.name.first,
					action.payload.name.last,
					action.payload.phoneNumbers[0].number
				)
					.catch(error => {
						this.store.dispatch(new AppActions.AddError(error));
						return Observable.empty();
					});
			} else {
				return this.api.savePrimaryContact(
					action.payload.name.first,
					action.payload.name.last,
					action.payload.phoneNumbers[0].number
				)
					.catch(error => {
						this.store.dispatch(new AppActions.AddError(error));
						return Observable.empty();
					});
			}
		})
		.map(() => new BookingActions.GetData())
		.do(() => this.router.navigateByUrl('/book/payment'));

	@Effect()
	savePayment$: Observable<Action> = this.actions
		.ofType<BookingActions.SavePayment>(BookingActions.SAVE_PAYMENT)
		.mergeMap(action => {
			this.store.dispatch(new AppActions.ClearErrors());
			return this.api.addPayment(
				action.payload.accountNumber,
				action.payload.accountHolderName
			)
				.catch(error => {
					this.store.dispatch(new AppActions.AddError(error));
					return Observable.empty();
				});
		})
		.map(() => new BookingActions.GetData())
		.do(() => this.router.navigateByUrl('/book/confirmation'));

	@Effect()
	getData$: Observable<Action> = this.actions
		.ofType<BookingActions.GetData>(BookingActions.GET_DATA)
		.mergeMap(action => {
			this.store.dispatch(new AppActions.ClearErrors());
			return this.api.getBooking()
				.catch(error => {
					if (action.payload && action.payload.showErrors) {
						this.store.dispatch(new AppActions.AddError(error));
					}
					return Observable.of(null);
				});
		})
		.map(payload => new BookingActions.SetData(payload && payload['data']));

	@Effect()
	commit$: Observable<Action> = this.actions
		.ofType<BookingActions.Commit>(BookingActions.COMMIT)
		.mergeMap(action => {
			this.store.dispatch(new AppActions.ClearErrors());
			return this.api.commitBooking()
				.catch(error => {
					this.store.dispatch(new AppActions.AddError(error));
					return Observable.empty();
				});
		})
		.map(() => new BookingActions.GetData());
}
