import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { AppAddError, UserActionTypes, UserGet, UserSet, UserAddStoredPayment } from '../actions';

import { UserService } from '../../services';

@Injectable()
export class UserEffects {
	constructor(
		private actions: Actions,
		private userService: UserService
	) { }

	@Effect()
	loginSuccess$: Observable<Action> = this.actions
		.ofType<UserGet>(UserActionTypes.GET_USER)
		.pipe(
			switchMap(() => this.userService.getUserPerson()
				.pipe(
					map(response => new UserSet(response.data)),
					catchError(error => of(new AppAddError(error)))
				))
		);

	@Effect()
	userStorePayment$: Observable<Action> = this.actions
		.ofType<UserAddStoredPayment>(UserActionTypes.ADD_STORED_PAYMENT)
		.pipe(
			switchMap((action) => this.userService.addStoredPayment(action.payload)
				.pipe(
					map(() => new UserGet()),
					catchError(error => of(new AppAddError(error)))
				)
			)
		);

}
