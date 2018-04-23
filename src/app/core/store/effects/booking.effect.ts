import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, Action, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { withLatestFrom, concat, mergeMap, switchMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { CoreState } from '../../store/reducers';
import {
	AppClearErrors, AppAddError,
	BookingActionTypes, BookingGetData, BookingUpdatePrimaryContact, BookingSavePassengerContact,
	BookingAddPayment, BookingSetData, BookingCommit, BookingUpdate, BookingCommitSuccess, BookingReset,
	BookingResetSuccess, BookingNotFound, BookingUpdateSuccess, UserAddStoredPayment, BookingUpdatePassengerPassport,
	PassengerSetSsrs,
	BookingSavePassengerSsrs
} from '../../store/actions';
import { bookingState } from '../../store/selectors';

import { BookingService, PaymentService, PassengerService, ContactService } from '../../services';
import { BsModalService } from 'ngx-bootstrap';
import { BookingNotFoundModalComponent } from '../../../features/home/components/booking-not-found-modal/booking-not-found-modal.component';
import { PaymentMethodType } from '../../../features/payment/models';


@Injectable()
export class BookingEffects {
	constructor(
		private bookingService: BookingService,
		private paymentService: PaymentService,
		private passengerService: PassengerService,
		private contactService: ContactService,
		private actions: Actions,
		private router: Router,
		private store: Store<CoreState>,
		private modal: BsModalService
	) { }

	@Effect()
	savePassengerAndContact$: Observable<Action> = this.actions.pipe(
		ofType<BookingSavePassengerContact>(BookingActionTypes.SAVE_PASSENGERS_AND_PRIMARY_CONTACT),
		switchMap((action: BookingSavePassengerContact) => {
			return this.passengerService.savePassengersAndPrimaryContact(action.payload)
				.pipe(
					map(() => new BookingSavePassengerSsrs(action.payload)),
					catchError(error => of(new AppAddError(error)))
				);
		})
	);


	@Effect()
	setSsrs$: Observable<Action> = this.actions.pipe(
		ofType<BookingSavePassengerSsrs>(BookingActionTypes.SAVE_PASSENGERS_SSRS),
		switchMap((action) => {
			return this.passengerService.addPassengerSSR(action.payload)
				.pipe(
					mergeMap(response => [new PassengerSetSsrs(response), new BookingGetData()]),
					catchError(error => of(new AppAddError(error))),
					tap(() => this.router.navigateByUrl('/book/bags')),
			);
		})
	);

	@Effect()
	updatePrimaryContact$: Observable<Action> = this.actions
		.pipe(
			ofType<BookingUpdatePrimaryContact>(BookingActionTypes.UPDATE_PRIMARY_CONTACT),
			switchMap((action) => {
				return of(new AppClearErrors())
					.pipe(
						concat(this.contactService.updatePrimaryContact(action.payload)
							.pipe(
								map(() => new BookingUpdate()),
								tap(() => this.router.navigateByUrl('/my-trips/reservation-summary')),
								catchError(error => of(new AppAddError(error)))
							))
					);
			})
		);

	@Effect()
	updatePassengerPassport$: Observable<Action> = this.actions
		.ofType<BookingUpdatePassengerPassport>(BookingActionTypes.UPDATE_PASSENGERS_PASSPORT)
		.pipe(
			switchMap((action) => {
				return of(new AppClearErrors())
					.pipe(
						concat(this.passengerService.updatePassengerPassport(action.payload)
							.pipe(
								map(() => new BookingGetData()),
								tap(() => this.router.navigateByUrl('/my-trips/reservation-summary')),
								catchError(error => of(new AppAddError(error)))
							))
					);
			}),
	);

	@Effect()
	addPayment$: Observable<Action> = this.actions
		.pipe(
			ofType<BookingAddPayment>(BookingActionTypes.ADD_PAYMENT),
			switchMap(action => of(new AppClearErrors())
				.pipe(
					concat(this.paymentService.addPayment(action.payload)
						.pipe(
							mergeMap(() => {
								const actions = new Array<Action>();
								actions.push(new BookingCommit());
								if (action.payload.saveCard) {
									const userStorePayment = new UserAddStoredPayment({
										accountNumber: action.payload.accountNumber,
										paymentMethodType: PaymentMethodType.ExternalAccount, // ToDo - Hard coded to enum 0 => 'ExternalAccount' for now chck with BA
										accountName: action.payload.accountHolderName, // Check - account name and account holder names are equal ?
										expiration: action.payload.expiryDate,
										paymentMethodCode: 'MC', // ToDo - Check BA how to get this info, for now hard coded
										default: false // ToDo - Check BA how to get this info
									});
									actions.push(userStorePayment);
								}
								return actions;
							}),
							catchError(error => of(new AppAddError(error)))
						))
				))
		);

	@Effect()
	getData$: Observable<Action> = this.actions
		.pipe(
			ofType<BookingGetData>(BookingActionTypes.GET_DATA),
			mergeMap(() => of(new AppClearErrors())
				.pipe(
					concat(this.bookingService.getBooking()
						.pipe(
							map(payload => new BookingSetData(payload && payload.data)),
							catchError(error => of(new AppAddError(error)))
						))
				))
		);

	@Effect()
	commit$: Observable<Action> = this.actions
		.pipe(
			ofType<BookingCommit>(BookingActionTypes.COMMIT),
			switchMap(() => of(new AppClearErrors())
				.pipe(
					concat(this.bookingService.commitBooking()
						.pipe(
							map(() => new BookingCommitSuccess()),
							catchError(error => of(new AppAddError(error)))
						))
				))
		);

	@Effect()
	commitSuccess$: Observable<Action> = this.actions
		.pipe(
			ofType<BookingCommitSuccess>(BookingActionTypes.COMMIT_SUCCESS),
			map(() => new BookingGetData()),
			tap(() => this.router.navigateByUrl('book/confirmation'))
		);

	@Effect()
	update$: Observable<Action> = this.actions
		.pipe(
			ofType<BookingUpdate>(BookingActionTypes.UPDATE),
			switchMap(() => of(new AppClearErrors())
				.pipe(
					concat(this.bookingService.updateBooking()
						.pipe(
							map(() => new BookingUpdateSuccess()),
							catchError(error => of(new AppAddError(error)))
						))
				))
		);

	@Effect()
	updateSuccess$: Observable<Action> = this.actions
		.pipe(
			ofType<BookingUpdateSuccess>(BookingActionTypes.UPDATE_SUCCESS),
			map(() => new BookingGetData())
		);

	@Effect()
	reset$: Observable<Action> = this.actions
		.pipe(
			ofType<BookingReset>(BookingActionTypes.RESET),
			withLatestFrom(this.store.pipe(select(bookingState))),
			mergeMap(([, state]) => {
				if (state === null) {
					return of(new BookingResetSuccess());
				}

				return this.bookingService.resetBooking()
					.pipe(
						map(() => new BookingResetSuccess()),
						catchError(error => of(new AppAddError(error)))
					);
			})
		);

	@Effect({ dispatch: false })
	bookingNotFound$: Observable<Action> = this.actions
		.pipe(
			ofType<BookingNotFound>(BookingActionTypes.BOOKING_NOT_FOUND),
			tap(() => {
				this.modal.show(BookingNotFoundModalComponent);
			}));
}
