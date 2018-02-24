import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { withLatestFrom, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';
import { from } from 'rxjs/observable/from';

import { CoreState } from '../../store/reducers';
import { AppActionTypes, AppGetTokenData, AppClearErrors, AppAddError, AppSetTokenData, BookingSetData } from '../../store/actions';
import { NavitaireApiService } from '../../services/navitaire-api.service';

@Injectable()
export class AppEffects {
	constructor(
		private store: Store<CoreState>,
		private actions: Actions,
		private api: NavitaireApiService
	) { }

	@Effect()
	getTokenData$: Observable<Action> = this.actions
		.ofType<AppGetTokenData>(AppActionTypes.GET_TOKEN_DATA)
		.pipe(
			withLatestFrom(this.store),
			mergeMap(([action, state]) => {
				if (action.payload.onlyIfBookingNotNull && !state.booking.data) {
					return empty();
				}

				this.store.dispatch(new AppClearErrors());
				return this.api.getTokenData()
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppAddError(error));
							return of(null);
						})
					);
			}),
			mergeMap(payload => {
				return from([
					new AppSetTokenData(payload && payload.data),
					new BookingSetData(null)
				]);
			})
		);
}
