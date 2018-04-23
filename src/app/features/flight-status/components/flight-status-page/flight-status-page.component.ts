import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';
import { CoreState, homeFlightStatusSearchInputState, FlightStatusSearchInputModel, StationModel, resourceStationsState } from '../../../../core';
import {
	FlightStatusGetStatus,
	FlightStatus,
	flightStatusState,
	FlightStatusAddNotificationSubscription
} from '../../store';
import { FlightStatusValue, FlightStatusNotificationSubscriptionRequest } from '../../models';

@Component({
	selector: 'app-flight-status-page',
	templateUrl: './flight-status-page.component.html',
	styleUrls: [
		'./flight-status-page.component.scss',
		'../../../../../assets/font/icomoon/icomoon.css'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightStatusPageComponent implements OnInit {

	search$: Observable<FlightStatusSearchInputModel>;
	journeyInfo$: Observable<FlightStatus>;
	stationData$: Observable<StationModel[]>;

	constructor(
		private store: Store<CoreState>
	) { }

	ngOnInit() {
		this.store.dispatch(new FlightStatusGetStatus());
		this.search$ = this.store.select(homeFlightStatusSearchInputState);
		this.journeyInfo$ = this.store.select(flightStatusState);
		this.stationData$ = this.store.select(resourceStationsState);
	}

	onSubscriptionRequestSubmit(form: NgForm, journeyInfo: any[], journeyIndex: number) {
		journeyInfo.forEach(flightInfo => {
			this.store.dispatch(new FlightStatusAddNotificationSubscription({
				request: {
					arrivalStation: flightInfo.arrivalStation,
					arrivalStationCode: flightInfo.arrivalStationCode,
					departureStation: flightInfo.departureStation,
					departureStationCode: flightInfo.departureStationCode,
					subscriptionEmail: form.value.email,
					flightNumber: flightInfo.flightNumber,
					departureDate: new Date(flightInfo.scheduledDepartureDateTime),
					estimatedArrivalDateTime: new Date(flightInfo.estimatedArrivalDateTime)
				} as FlightStatusNotificationSubscriptionRequest,
				journeyIndex: journeyIndex
			}));
		});
	}

	firstFlight(info: any) {
		if (info.hasError || !info.responseReceived || info.flightStatusResponse.length === 0) {
			return null;
		}

		return info.flightStatusResponse[0][0];
	}

	hasPendingFlights(group: any[]) {
		let result = false;
		group.forEach(f => result = result || !(f.legStatus === FlightStatusValue.arrived || f.legStatus === FlightStatusValue.cancelled || f.legStatus === FlightStatusValue.diverted));
		return result;
	}

	toggleIfValid(form: NgForm, collapsibles: any[]) {
		if (form.valid) {
			collapsibles.forEach(e => e.toggle());
		}
	}
}
