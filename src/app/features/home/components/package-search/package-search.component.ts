import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { StationModel, WorldRegionModel, AvailabilitySearchModel } from '../../../../core';


@Component({
	selector: 'app-package-search',
	templateUrl: './package-search.component.html',
	styleUrls: ['./package-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PackageSearchComponent implements OnInit {
	@Input() stations: StationModel[];
	@Input() worldRegions: WorldRegionModel;
	@Input() searchInput: AvailabilitySearchModel;

	@Output() searchClick = new EventEmitter<AvailabilitySearchModel>();

	constructor() { }

	packageType = 'flightCar';
	hotelRooms = '1';

	ngOnInit() { }

	onSearchClick(form) {
		this.searchClick.emit({
			...form.value,
			flightType: 'roundTrip'
		});
	}
}
