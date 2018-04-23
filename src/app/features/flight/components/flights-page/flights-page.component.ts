import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store, select } from '@ngrx/store';

import {
	FlightSearch, FlightCombinedSearch, FlightLowFareSearch, FlightSellTrip,
	CoreState,
	availabilitySearchInputState, resourceStationsState, resourceWorldRegionsState, flightSearchResultsState, flightLowFareSearchResultsState
} from '../../../../core/store';
import {
	StationModel, WorldRegionModel, AvailabilitySearchModel, FlightSearchModel, FlightSearchResultModel, FareSelectionModel, TripSelectionModel
} from '../../../../core/models';


@Component({
	selector: 'app-flights-page',
	templateUrl: './flights-page.component.html',
	styleUrls: ['./flights-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightsPageComponent implements OnInit, OnDestroy {
	stations$: Observable<StationModel[]>;
	worldRegions$: Observable<WorldRegionModel>;
	lowFareSearchResults$: Observable<FlightSearchResultModel[]>;
	searchResults$: Observable<FlightSearchResultModel[]>;
	searchInput$: Observable<AvailabilitySearchModel>;

	newSearch = false;

	trips = [];
	tripSelection: TripSelectionModel = {
		fareSelections: {},
		adultCount: 0,
		childCount: 0
	};

	private subs: Subscription[] = [];

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.stations$ = this.store.pipe(select(resourceStationsState));
		this.worldRegions$ = this.store.select(resourceWorldRegionsState);
		this.lowFareSearchResults$ = this.store.pipe(select(flightLowFareSearchResultsState));
		this.searchResults$ = this.store.pipe(select(flightSearchResultsState));
		this.searchInput$ = this.store.pipe(select(availabilitySearchInputState));

		this.subs.push(this.searchResults$.subscribe(searchResults => {
			this.trips = searchResults.reduce((previous, current) => {
				return !previous ? current.data.availability.trips : previous.concat(current.data.availability.trips);
			}, []);

			this.tripSelection = {
				...this.tripSelection,
				fareSelections: this.trips.reduce((previous, current, i) => {
					if (current.lowestFareJourney) {
						previous[i] = {
							journeyKey: current.lowestFareJourney.journeyKey,
							fareAvailabilityKey: current.lowestFareJourney.lowestFare.fareAvailabilityKey
						};
					}
					return previous;
				}, {})
			};
		}));
		this.subs.push(this.searchInput$.subscribe(searchInput => {
			this.tripSelection = {
				...this.tripSelection,
				adultCount: searchInput.criteria.adultCount,
				childCount: searchInput.criteria.childCount
			};
		}));
	}

	ngOnDestroy() {
		this.subs.forEach(sub => sub.unsubscribe());
	}

	onSearchClick(input: AvailabilitySearchModel) {
		this.store.dispatch(new FlightCombinedSearch(input));
	}

	onTripLowFareSearchClick(event: FlightSearchModel) {
		this.store.dispatch(new FlightLowFareSearch(event));
	}

	onTripSearchClick(event: FlightSearchModel) {
		this.store.dispatch(new FlightSearch(event));
	}

	onTripSelectFare(searchResultIndex: string, event: FareSelectionModel) {
		this.tripSelection.fareSelections[searchResultIndex] = event;
	}

	allFareSelectionsMade() {
		return Object.keys(this.tripSelection.fareSelections).length === this.trips.length;
	}

	onContinueClick() {
		// can't get child journey components to participate in the form (using ControlContainer), maybe because they are populated asynchronously?
		this.store.dispatch(new FlightSellTrip(this.tripSelection));
	}
}
