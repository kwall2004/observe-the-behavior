import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { HomeCheckStatus, FlightStatusSearchInputModel, CoreState } from '../../../../core';
import { FlightStatusGetStatus } from '../../store';

@Component({
	selector: 'app-flight-status-search',
	templateUrl: './flight-status-search.component.html',
	styleUrls: ['./flight-status-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightStatusSearchComponent {

	readonly dates = [-1, 0, 1, 2, 3, 4, 5]
		.map((e, i) => {
			const d = moment(new Date(Date.now() + (e * 86400000)));
			return {
				index: i,
				date: d.toDate(),
				text: d.format('dddd, MMMM D, YYYY')
			};
		});

	@Input()
	stationData: any;

	@Input()
	initialSearch: FlightStatusSearchInputModel;

	constructor(private store: Store<CoreState>) { }

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

		this.store.dispatch(new FlightStatusGetStatus());
	}
}
