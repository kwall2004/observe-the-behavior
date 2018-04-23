import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { OptionalServicesActionTypes, OptionalServicesRetrieveExistingBagotronPricing } from '../actions/optional-services.action';
import { of } from 'rxjs/observable/of';
import { BagotronSetData } from '../../../optional-services/store/actions';
import { OptionalServicesRetrieveNewBagotronPricing } from '../../../optional-services/store';
import { BagotronService } from '../../../../core/services/dot-rez/bagotron.service';
import { BookingNotFound, CoreState, authTokenDataState, AppAddError } from '../../../../core';


@Injectable()
export class OptionalServicesEffects {
	constructor(
		private actions$: Actions,
		private bagotron: BagotronService,
		private store: Store<CoreState>) { }

	@Effect()
	getExistingBagotronPricing$: Observable<Action> = this.actions$
		.ofType<OptionalServicesRetrieveExistingBagotronPricing>(OptionalServicesActionTypes.RETRIEVE_EXISTING_BAGOTRON_PRICING).pipe(
			withLatestFrom(this.store.select(authTokenDataState)),
			switchMap(([action, tokenData]) => {
				const bagotronRequest = { ...action.payload, apoToken: tokenData.apoRandomNumber };
				return this.bagotron
					.getExistingBagotronPricing(bagotronRequest)
					.pipe(
						map(response => new BagotronSetData(response)),
						catchError(error => of(new BookingNotFound(error)))
					);
			})
		);

	@Effect()
	getNewBagotronPricing$: Observable<Action> = this.actions$
		.ofType<OptionalServicesRetrieveNewBagotronPricing>(OptionalServicesActionTypes.RETRIEVE_NEW_BAGOTRON_PRICING).pipe(
			switchMap((action) => {
				return this.bagotron
					.getNewBagotronPricing(action.payload)
					.pipe(
						map(response => new BagotronSetData(response)),
						catchError(error => of(new AppAddError(error)))
					);
			})
		);
}
