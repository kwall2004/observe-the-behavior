import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { StationModel, WorldRegionModel, AvailabilitySearchModel } from '../../../core';


@Component({
	selector: 'app-flight-only-search',
	templateUrl: './flight-only-search.component.html',
	styleUrls: ['./flight-only-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightOnlySearchComponent {
	@Input() stations: StationModel[];
	@Input() worldRegions: WorldRegionModel;
	@Input() searchInput: AvailabilitySearchModel;

	@Output() searchClick = new EventEmitter<AvailabilitySearchModel>();

	flightType = 'roundTrip';

	onSearchClick(form) {
		this.searchClick.emit({
			...form.value
		});
	}
}
