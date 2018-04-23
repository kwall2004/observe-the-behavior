import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { tap, switchMap, catchError, map } from 'rxjs/operators';
import { HomeActionTypes, HomeCheckStatus, HomeRetrieveBooking, BookingSetData, BookingNotFound } from '../actions';
import { BookingService } from '../../services';

@Injectable()
export class HomeEffects {
	constructor(
		private actions$: Actions,
		private router: Router,
		private bookingService: BookingService
	) { }

	@Effect({ dispatch: false })
	checkStatus$: Observable<HomeCheckStatus> = this.actions$
		.ofType<HomeCheckStatus>(HomeActionTypes.CHECK_STATUS)
		.pipe(
			tap(() => { this.router.navigate(['flight-status']); })
		);

	@Effect()
	retrieveBooking$: Observable<Action> = this.actions$
		.ofType<HomeRetrieveBooking>(HomeActionTypes.RETRIEVE_BOOKING).pipe(
			switchMap((action) => {
				return this.bookingService.retrieveBooking(action.payload)
					.pipe(
						tap(response => {
							if (response.data.info.isWithin24Hours) {
								this.router.navigate(['check-in']);
							} else {
								this.router.navigate(['my-trips']);
							}
						}),
						map(response => new BookingSetData(response.data)),
						catchError(error => of(new BookingNotFound(error)))
					);
			})
		);
}
