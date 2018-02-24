import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';

import { SeatsActionTypes, SeatsAssignSeats } from '../../store/actions';
import { CoreState, currentFlow } from '../../../../core';


@Injectable()
export class SeatEffects {
	constructor(
		private actions$: Actions,
		private store: Store<CoreState>,
		private router: Router
	) { }

	@Effect({ dispatch: false })
	assignSeats$: Observable<any> = this.actions$
		.ofType<SeatsAssignSeats>(SeatsActionTypes.ASSIGN_SEATS)
		.pipe(
			withLatestFrom(this.store.pipe(select(currentFlow))),
			tap(([action, flow]) => {
				console.log(flow);
				if (flow === 'book') {
					this.router.navigate([flow, 'options']);
				}
				this.router.navigate([flow, 'itinerary']);
			})
		);
}
