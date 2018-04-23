import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError, concat } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { SsrService } from '../../services';
import { AppClearErrors, AppAddError, SsrLoadAvailability, SsrLoadAvailabilitySuccess, SsrActionTypes } from '../../store/actions';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SsrEffects {
	constructor(
		private actions: Actions,
		private ssrService: SsrService
	) { }

	@Effect()
	sellTrip$: Observable<Action> = this.actions
		.ofType<SsrLoadAvailability>(SsrActionTypes.LOAD_AVAILABILITY)
		.pipe(
			switchMap(() => {
				return of(new AppClearErrors())
					.pipe(
						concat(this.ssrService.getSsrAvailability()
							.pipe(
								map((response) => new SsrLoadAvailabilitySuccess(response)),
								catchError(error => of(new AppAddError(error)))
							))
					);
			})
		);
}
