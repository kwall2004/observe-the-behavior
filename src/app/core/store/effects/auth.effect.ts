import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';

import { TokenService, UserService, LocalStorageService } from '../../services';
import {
	AuthActionTypes, AuthInitTokenData, AuthSetTokenData, AuthLogin, AuthLoginSuccess, AuthLoginFail,
	AppActionTypes, AppClearErrors, AppAddError,
	BookingSetData, BookingGetData,
	SsrLoadAvailability,
	ShoppingCartClearVisitedPages,
	FlightClearSearchResults,
	UserSet, UserGet
} from '../actions';
import { isLoggedIn } from '../../../features/auth/utilities';


@Injectable()
export class AuthEffects {
	constructor(
		private actions$: Actions,
		private tokenService: TokenService,
		private userService: UserService,
		private storage: LocalStorageService
	) { }

	@Effect()
	initTokenData$: Observable<Action> = this.actions$
		.pipe(
			ofType('@ngrx/effects/init'),
			map(() => new AuthInitTokenData({
				token: this.storage.getItem('token'),
				idleTimeoutInMinutes: this.storage.getItem('idleTimeoutInMinutes'),
				apoRandomNumber: this.storage.getItem('apoRandomNumber')
			}))
		);

	@Effect()
	getSessionContext$: Observable<Action> = this.actions$
		.pipe(
			ofType(AppActionTypes.START),
			switchMap(() => this.tokenService.getSessionContext()
				.pipe(
					mergeMap(response => {
						const startActions: Action[] = [];
						if (isLoggedIn(response.data)) {
							startActions.push(new AuthLoginSuccess(), new UserGet());
						}
						if (response.data.hasBookingInState) {
							startActions.push(new BookingGetData(), new SsrLoadAvailability());
						}
						return startActions;
					}),
					catchError(error => of(new AppAddError(error)))
				)
			)
		);

	@Effect({ dispatch: false })
	storeTokenData$: Observable<Action> = this.actions$
		.pipe(
			ofType(AuthActionTypes.SET_TOKEN_DATA),
			tap<AuthSetTokenData>(action => {
				if (action.payload && action.payload.token) {
					this.storage.setItem('token', action.payload && action.payload.token);
				} else {
					this.storage.removeItem('token');
				}

				if (action.payload && action.payload.idleTimeoutInMinutes) {
					this.storage.setItem('idleTimeoutInMinutes', action.payload && action.payload.idleTimeoutInMinutes);
				} else {
					this.storage.removeItem('idleTimeoutInMinutes');
				}

				this.storage.setItem('apoRandomNumber', Math.random().toString());
			})
		);

	@Effect()
	getTokenData$: Observable<Action> = this.actions$
		.pipe(
			ofType(AuthActionTypes.GET_TOKEN_DATA),
			mergeMap(() => concat(
				of(new AppClearErrors()),
				this.tokenService.getTokenData()
					.pipe(
						mergeMap(payload => [
							new AuthSetTokenData(payload && payload.data),
							new BookingSetData(null),
							new ShoppingCartClearVisitedPages(),
							new FlightClearSearchResults()
						]),
						catchError(error => of(new AppAddError(error)))
					)
			))
		);

	@Effect()
	login$: Observable<Action> = this.actions$
		.pipe(
			ofType<AuthLogin>(AuthActionTypes.LOGIN),
			switchMap((action) => this.tokenService.loginOrKeepAlive(action.payload)
				.pipe(
					map(() => new AuthLoginSuccess()),
					catchError(error => of(new AuthLoginFail(error)))
				)
			)
		);

	@Effect()
	loginSuccess$: Observable<Action> = this.actions$
		.pipe(
			ofType(AuthActionTypes.LOGIN_SUCCESS),
			switchMap(() => this.userService.getUserPerson()
				.pipe(
					map((response) => new UserSet(response.data)),
					catchError(error => of(new AuthLoginFail(error)))
				)
			)
		);
}
