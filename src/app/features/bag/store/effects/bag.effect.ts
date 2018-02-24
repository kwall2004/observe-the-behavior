import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';

import { BagsActionTypes, BagsSaveBags } from '../../store/actions';
import { CoreState, currentFlow } from '../../../../core';


@Injectable()
export class BagEffects {
	constructor(
		private actions$: Actions,
		private store: Store<CoreState>,
		private router: Router
	) { }

	@Effect({ dispatch: false })
	saveBags$: Observable<any> = this.actions$
		.ofType<BagsSaveBags>(BagsActionTypes.SAVE_BAGS)
		.pipe(
			withLatestFrom(this.store.pipe(select(currentFlow))),
			tap(([action, flow]) => {
				console.log(flow);
				if (flow === 'book') {
					this.router.navigate([flow, 'seats']);
				}
				this.router.navigate([flow, 'itinerary']);
			})
		);
}
