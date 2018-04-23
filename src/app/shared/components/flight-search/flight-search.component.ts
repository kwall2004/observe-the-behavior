import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { StationModel, WorldRegionModel, AvailabilitySearchCriteriaModel } from '../../../core';


@Component({
	selector: 'app-flight-search',
	templateUrl: './flight-search.component.html',
	styleUrls: ['./flight-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	viewProviders: [{
		provide: ControlContainer,
		useExisting: NgForm
	}]
})
export class FlightSearchComponent {
	@Input() stations: StationModel[];
	@Input() worldRegions: WorldRegionModel;
	@Input() criteria: AvailabilitySearchCriteriaModel;
	@Input() multipleDates = true;
}
