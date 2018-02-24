import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { HomeActionTypes, HomeCheckStatus, HomeRetrieveBooking } from '../actions/home.action';
import { NavitaireApiService } from '../../../../core';


@Injectable()
export class HomeEffects {
	constructor(
		private actions$: Actions,
		private router: Router,
		private api: NavitaireApiService
	) { }

	@Effect({ dispatch: false })
	checkStatus$: Observable<HomeCheckStatus> = this.actions$
		.ofType<HomeCheckStatus>(HomeActionTypes.CHECK_STATUS)
		.pipe(tap((action) => {
			this.router.navigate(['flight-status']);
		}));

	@Effect({ dispatch: false })
	retrieveBooking$: Observable<HomeRetrieveBooking> = this.actions$
		.ofType<HomeRetrieveBooking>(HomeActionTypes.RETRIEVE_BOOKING).pipe(
			switchMap((action) => {
				return this.api
					.retrieveBooking(action.payload)
					.pipe(
						tap(response => {
							console.log(response.data);
							// blc remove this once backend is accurately implemented.
							function getRandomInt(min, max) {
								min = Math.ceil(min);
								max = Math.floor(max);
								return Math.floor(Math.random() * (max - min)) + min;
							}
							const random = getRandomInt(1, 2);
							if (random === 1) {
								response.data.isWithin24Hours = false;
							}
							// end mock backend
							if (response.data.isWithin24Hours) {
								this.router.navigate(['check-in']);
							} else {
								this.router.navigate(['my-trips']);
							}
						}),
						catchError(error => {
							console.log(error);
							return of(null);
						})
					);
			})
		);
}
