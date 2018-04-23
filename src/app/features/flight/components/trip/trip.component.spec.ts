import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { TripComponent } from './trip.component';
import { TripModel } from '../../../../core';

@Component({
	selector: 'app-low-fare',
	template: ''
})
class MockLowFareComponent {
	@Input() search: any;
	@Input() results: any;
}

@Component({
	selector: 'app-journey',
	template: ''
})
class MockJourneyComponent {
	@Input() journey: any;
	@Input() searchResultIndex: any;
	@Input() fareValue: any;
}

describe('TripComponent', () => {
	let component: TripComponent;
	let fixture: ComponentFixture<TripComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockLowFareComponent,
				MockJourneyComponent,
				TripComponent
			]
		})
			.compileComponents();
	}));

	it('is created', () => {
		fixture = TestBed.createComponent(TripComponent);
		component = fixture.componentInstance;
		component.trip = {
			search: {
				index: 1,
				originStationCode: 'test',
				destinationStationCode: 'test',
				date: new Date(2018, 1, 1),
				adultCount: 1,
				childCount: 0
			},
			journeysAvailable: [],
			origin: 'test t',
			destination: 'test t'
		};
		component.searchResult = {
			search: {
				index: 1,
				originStationCode: 'test',
				destinationStationCode: 'test',
				date: new Date(2018, 1, 1),
				adultCount: 1,
				childCount: 0
			},
			data: null
		};
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('handles no available fares', () => {
		fixture = TestBed.createComponent(TripComponent);
		component = fixture.componentInstance;
		component.trip = {
			journeysAvailable: [
				{
					fares: {},
					clubFare: undefined,
					lowestFare: undefined,
					standardFare: undefined
				}
			]
		} as TripModel;
		component.searchResult = {
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
		};
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});
});
