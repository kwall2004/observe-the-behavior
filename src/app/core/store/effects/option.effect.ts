import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { combineLatest, switchMap, map, catchError, concat, tap } from 'rxjs/operators';
import {
	AppClearErrors, AppAddError,
	OptionActionTypes, OptionSaveOptionsSuccess
} from '../actions';
import { extrasInputState, ssrAvailabilityState } from '../selectors';
import { CoreState } from '../reducers';
import { SsrService } from '../../services';


@Injectable()
export class OptionEffects {

	constructor(
		private actions: Actions,
		private store: Store<CoreState>,
		private ssrService: SsrService,
		private router: Router
	) { }

	@Effect()
	saveSelectedOptions$: Observable<Action> = this.actions
		.ofType(OptionActionTypes.SAVE_OPTIONS)
		.pipe(
			switchMap(() => of(new AppClearErrors())
				.pipe(
					combineLatest(
						this.store.select(extrasInputState),
						this.store.select(ssrAvailabilityState),
						(action, selection, availability) => {

							// todo: elaborate

							const ssrs = [];

							if (selection.flexSelected) {
								ssrs.push('FLX2');
							}

							if (selection.shortcutSecuritySelection) {
								if (selection.shortcutSecuritySelection.find(e => e)) {
									ssrs.push('SCPS');
								}
							}

							if (selection.shortcutBoardingSelected) {
								ssrs.push('SCBD'); // todo: should be FSMC if free spirit member
							}

							if (selection.checkInSelection === 'pre-pay') {
								ssrs.push('BPPT');
							}

							const getKey = (obj: any, ssr: string) => {
								return (Object.values(obj)[0])[ssr].passengersAvailability['MCFBRFQ-'].ssrKey;
							};

							const keys = ssrs.map(ssr => ({
								ssrKey: getKey(availability, ssr),
								count: 1
							}));

							return [action, keys];
						}
					),
					switchMap(([action, keys]: [AppClearErrors, [string, any]]) => {

						if (keys.length > 0) {

							return of(action)
								.pipe(
									concat(
										this.ssrService.addSsrs(keys)
											.pipe(
												map(() => new OptionSaveOptionsSuccess()),
												catchError((error) => of(new AppAddError(error)))
											)
									)
								);
						}

						return of(new OptionSaveOptionsSuccess());
					})
				)
			)
		);

	@Effect({ dispatch: false })
	proceedToNextPage$: Observable<Action> = this.actions
		.ofType(OptionActionTypes.SAVE_OPTIONS_SUCCESS)
		.pipe(
			tap(() => this.router.navigateByUrl('/book/payment'))
		);

}
