// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Action } from '@ngrx/store';
// import { Actions, Effect } from '@ngrx/effects';
// import { tap } from 'rxjs/operators';

// import * as FlightStatusActions from '../actions/flight-status.action';
// import { Router } from '@angular/router';

// @Injectable()
// export class FlightStatusEffects {
// 	constructor(
// 		private actions$: Actions,
// 		private router: Router
// 	) { }


// 	@Effect({ dispatch: false })
// 	flightStatusSearch$: Observable<FlightStatusActions.GetFlightStatus> = this.actions$
// 		.ofType<FlightStatusActions.GetFlightStatus>(FlightStatusActions.GET_FLIGHT_STATUS)
// 		.pipe(tap((action) => {
// 			if (action.payload.searchType === 'destination') {
// 				this.router.navigateByUrl('/flight-status/destination');
// 			}
// 			if (action.payload.searchType === 'flightNumber') {
// 				this.router.navigateByUrl('/flight-status-flight-number');
// 			}
// 		}));
// }
