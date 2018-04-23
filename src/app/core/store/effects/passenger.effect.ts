import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { concat, mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import {
	AppClearErrors, AppAddError,
	PassengerActionTypes, PassengerSetSsrs
} from '../../store/actions';


import { PassengerService } from '../../services/dot-rez/passenger.service';

@Injectable()
export class PassengerEffects {
	constructor(
		private resourceService: PassengerService,
		private actions: Actions,
	) { }

	@Effect()
	loadSsrPassenger$: Observable<Action> = this.actions
		.ofType(PassengerActionTypes.LOAD_PASSENGER_SSR)
		.pipe(
			mergeMap(() => of(new AppClearErrors())
				.pipe(
					concat(this.resourceService.getPassengerSsrs()
						.pipe(
							map(payload => new PassengerSetSsrs(payload), // payload && payload.data
								catchError(error => of(new AppAddError(error)))
							))
					))
			));

}
