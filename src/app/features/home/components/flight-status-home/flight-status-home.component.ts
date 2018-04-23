import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { CoreState, HomeCheckStatus, StationModel, FlightStatusSearchInputModel, resourceStationsState } from '../../../../core';


@Component({
	selector: 'app-flight-status-home',
	templateUrl: './flight-status-home.component.html',
	styleUrls: ['./flight-status-home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class FlightStatusHomeComponent {

	stationData$: Observable<StationModel[]>;

	readonly dates = [-1, 0, 1, 2, 3, 4, 5]
		.map((e, i) => {
			const d = moment(new Date(Date.now() + (e * 86400000)));
			return {
				index: i,
				date: d.toDate(),
				text: d.format('dddd, MMMM D, YYYY')
			};
		});

	constructor(private store: Store<CoreState>) {
		this.stationData$ = store
			.select(resourceStationsState);
	}

	onSubmit(form: NgForm) {
		if (form.value.searchType === 'destination') {
			this.store.dispatch(new HomeCheckStatus({
				departureStation: form.value.departureStation,
				departureCity: form.value.departureCity,
				arrivalStation: form.value.arrivalStation,
				arrivalCity: form.value.arrivalCity,
				departureDateIndex: form.value.departureDateIndex,
				departureDate: this.dates[form.value.departureDateIndex].date,
				searchType: form.value.searchType
			} as FlightStatusSearchInputModel));
		} else if (form.value.searchType === 'flightNumber') {
			this.store.dispatch(new HomeCheckStatus({
				flightNumber: form.value.flightNumber,
				departureDateIndex: form.value.departureDateIndex,
				departureDate: this.dates[form.value.departureDateIndex].date,
				searchType: form.value.searchType
			} as FlightStatusSearchInputModel));
		}
	}
}
