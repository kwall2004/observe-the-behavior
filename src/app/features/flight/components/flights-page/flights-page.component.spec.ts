import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import * as StoreFunctions from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import {
	CoreState, reducers,
	FlightSearchModel,
	FlightSearch, FlightLowFareSearch, FlightAddSearchResult,
	resourceStationsState, flightSearchResultsState, flightLowFareSearchResultsState,
	availabilitySearchInputState
} from '../../../../core';
import { FlightsPageComponent } from './flights-page.component';
import { ensureObjectIsMockable, SharedTestingModule } from '../../../../testing';


@Component({
	selector: 'app-trip',
	template: ''
})
class MockTripComponent {
	@Input() trip: any;
	@Input() searchResultIndex: string;
	@Input() searchResult: any;
	@Input() lowFareSearchResults: any[];
}

describe('FlightsPageComponent', () => {
	let component: FlightsPageComponent;
	let fixture: ComponentFixture<FlightsPageComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockTripComponent,
				FlightsPageComponent
			],
			imports: [
				StoreModule.forRoot(reducers),
				FormsModule,
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();
		ensureObjectIsMockable(StoreFunctions, 'select');
		spyOn(StoreFunctions, 'select').and.callThrough();

		fixture = TestBed.createComponent(FlightsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('is created', () => {
		expect(component).toBeTruthy();
	});

	it('selects state', () => {
		expect(StoreFunctions.select).toHaveBeenCalledWith(resourceStationsState);
		expect(StoreFunctions.select).toHaveBeenCalledWith(availabilitySearchInputState);
		expect(StoreFunctions.select).toHaveBeenCalledWith(flightSearchResultsState);
		expect(StoreFunctions.select).toHaveBeenCalledWith(flightLowFareSearchResultsState);
	});

	it('dispatches actions', () => {
		const search: FlightSearchModel = {
			index: 1,
			originStationCode: 'test',
			destinationStationCode: 'test',
			date: new Date(2018, 1, 1),
			adultCount: 2,
			childCount: 0
		};

		component.onTripLowFareSearchClick(search);
		expect(store.dispatch).toHaveBeenCalledWith(new FlightLowFareSearch(search));

		component.onTripSearchClick(search);
		expect(store.dispatch).toHaveBeenCalledWith(new FlightSearch(search));
	});

	it('auto selects fares', () => {
		store.dispatch(new FlightAddSearchResult({
			search: {
				index: 1,
				originStationCode: 'test',
				destinationStationCode: 'test',
				date: new Date(2018, 1, 1),
				adultCount: 1,
				childCount: 0
			},
			data: {
				availability: {
					trips: [
						{
							journeysAvailable: [
								{
									fares: {
										test: {
											fareAmount: 10
										}
									},
									clubFare: {
										fareAmount: 10
									},
									lowestFare: {
										fareAmount: 10
									},
									standardFare: undefined
								}
							],
							lowestFareJourney: {
								fares: {
									test: {
										fareAmount: 10
									}
								},
								clubFare: {
									fareAmount: 10
								},
								lowestFare: {
									fareAmount: 10
								},
								standardFare: undefined
							}
						}
					],
					faresAvailable: {
						test: {
							passengerFares: [
								{
									fareAvailabilityKey: 'test',
									fareAmount: 10
								}
							]
						}
					}
				},
				clubFares: {
					test: true
				}
			}
		}));

		expect(component.allFareSelectionsMade()).toBeTruthy();
	});

	it('handles no available fares', () => {
		store.dispatch(new FlightAddSearchResult({
			search: {
				index: 1,
				originStationCode: 'test',
				destinationStationCode: 'test',
				date: new Date(2018, 1, 1),
				adultCount: 1,
				childCount: 0
			},
			data: {
				availability: {
					trips: [
						{
							journeysAvailable: [
								{
									fares: {},
									clubFare: undefined,
									lowestFare: undefined,
									standardFare: undefined
								}
							]
						}
					],
					faresAvailable: {
						test: {
							passengerFares: [
								{
									fareAvailabilityKey: 'test',
									fareAmount: 10
								}
							]
						}
					}
				},
				clubFares: {
					test: true
				}
			}
		}));

		expect(component.allFareSelectionsMade()).toBeFalsy();
	});
});
