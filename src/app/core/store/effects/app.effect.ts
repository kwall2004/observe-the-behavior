import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

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
		.ofType(AppActions.GET_TOKEN_DATA)
		.mergeMap(action => {
			this.store.dispatch(new AppActions.ClearErrors());
			return this.api.getTokenData()
				.catch(error => {
					this.store.dispatch(new AppActions.AddError(error));
					return Observable.of(null);
				});
		})
		.mergeMap(payload => {
			return Observable.from([
				new AppActions.SetTokenData(payload && payload.data),
				new BookingActions.SetData(null)
			]);
		});
}
