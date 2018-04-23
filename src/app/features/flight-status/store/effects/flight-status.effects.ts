import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { concat, withLatestFrom, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { BsModalService } from 'ngx-bootstrap';
import * as moment from 'moment';
import {
	CoreState,
	AppClearErrors, AppAddError,
	homeFlightStatusRequestState,
	FlightInfoService,
	resourceStationsState
} from '../../../../core';
import {
	FlightStatusGetStatus,
	FlightStatusGetStatusSuccess,
	FlightStatusGetStatusError,
	FlightStatusActionType,
	FlightStatusAddNotificationSubscription,
	FlightStatusAddNotificationSubscriptionSuccess
} from '../actions';
import { FlightStatusSubscriptionModalComponent } from '../../components/flight-status-subscription-modal/flight-status-subscription-modal.component';

@Injectable()
export class FlightStatusEffects {
	constructor(
		private actions: Actions,
		private store: Store<CoreState>,
		private flightInfoService: FlightInfoService,
		private modalService: BsModalService
	) { }

	@Effect()
	getData$: Observable<Action> = this.actions
		.ofType<FlightStatusGetStatus>(FlightStatusActionType.GET_FLIGHT_STATUS)
		.pipe(
			switchMap(() => of(new AppClearErrors())
				.pipe(
					withLatestFrom(
						this.store.select(homeFlightStatusRequestState),
						this.store.select(resourceStationsState),
						(action, request, stations) => ({ action: action, request: request, stations: stations })
					),
					switchMap(arg => of(arg.action)
						.pipe(
							concat(this.flightInfoService.getFlightStatus(arg.request)
								.pipe(
									switchMap(payload => {

										const memo = {};
										(payload as any[]).forEach(e => {
											let found = memo[e.departureStationCode];
											e.departureCity = memo[e.departureStationCode] = found ? found :
												arg.stations.find(e2 => e2.stationCode === e.departureStationCode).shortName;

											found = memo[e.arrivalStationCode];
											e.arrivalCity = memo[e.arrivalStationCode] = found ? found :
												arg.stations.find(e2 => e2.stationCode === e.arrivalStationCode).shortName;
										});

										return of(new FlightStatusGetStatusSuccess(payload));
									}),
									catchError(error =>
										from([
											new FlightStatusGetStatusError(),
											new AppAddError(error)
										])
									)
								)
							)
						)
					)
				)
			)
		);

	@Effect()
	addNotificationSubscription$: Observable<Action> = this.actions
		.ofType<FlightStatusAddNotificationSubscription>(FlightStatusActionType.POST_NOTIFICATION_SUBSCRIPTION_REQUEST)
		.pipe(
			switchMap(action => of(new AppClearErrors())
				.pipe(
					concat(
						this.flightInfoService.addFlightStatusNotificationSubscription(action.payload.request)
							.pipe(
								switchMap(() => {

									this.modalService.show(FlightStatusSubscriptionModalComponent, {
										initialState: {
											succeeded: true,
											emailAddress: action.payload.request.subscriptionEmail,
											flightNumber: action.payload.request.flightNumber,
											destination: action.payload.request.arrivalStation,
											flightDate: moment(action.payload.request.departureDate).format('MMMM Do')
										}
									});

									return of(new FlightStatusAddNotificationSubscriptionSuccess(action.payload.journeyIndex));
								}),
								catchError(error => of(new AppAddError(error)))
							)
					)
				)
			)
		);
}
