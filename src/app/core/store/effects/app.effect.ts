import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { withLatestFrom, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';
import { from } from 'rxjs/observable/from';

import * as fromRoot from '../reducers';
import * as AppActions from '../../store/actions/app.action';
import * as BookingActions from '../actions/booking.action';
import { NavitaireApiService } from '../../services/navitaire-api.service';

@Injectable()
export class AppEffects {
	constructor(
		private store: Store<fromRoot.CoreState>,
		private actions: Actions,
		private api: NavitaireApiService
	) { }

	@Effect()
	getTokenData$: Observable<Action> = this.actions
		.ofType<AppActions.GetTokenData>(AppActions.GET_TOKEN_DATA)
		.pipe(
			withLatestFrom(this.store),
			mergeMap(([action, state]) => {
				if (action.payload.onlyIfBookingNotNull && !state.booking.data) {
					return empty();
				}

				this.store.dispatch(new AppActions.ClearErrors());
				return this.api.getTokenData()
					.pipe(
						catchError(error => {
							this.store.dispatch(new AppActions.AddError(error));
							return of(null);
						})
					);
			}),
			mergeMap(payload => {
				return from([
					new AppActions.SetTokenData(payload && payload.data),
					new BookingActions.SetData(null)
				]);
			})
		);
}
