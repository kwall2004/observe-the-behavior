import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxBootstrapTestingModule, SharedTestingModule } from '../../../testing';

import { FlightSearchComponent } from './flight-search.component';
import { StationModel, AvailabilitySearchCriteriaModel } from '../../../core';


describe('FlightSearchComponent', () => {
	let component: FlightSearchComponent;
	let fixture: ComponentFixture<FlightSearchComponent>;
	let stations: StationModel[] = [];
	let criteria: AvailabilitySearchCriteriaModel;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlightSearchComponent
			],
			imports: [
				FormsModule,
				NgxBootstrapTestingModule,
				SharedTestingModule
			],
			providers: [
				NgForm
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		stations = [{
			stationCode: 'test',
			shortName: 'test'
		}];
		criteria = {
			originStationCode: 'test',
			destinationStationCode: 'test',
			dates: [
				new Date(2018, 1, 1),
				new Date(2018, 1, 1)
			],
			adultCount: 1,
			childCount: 1,
			promoCode: null
		};

		fixture = TestBed.createComponent(FlightSearchComponent);
		component = fixture.componentInstance;
		component.stations = stations;
		component.criteria = criteria;
		fixture.detectChanges();
	});

	it('is created', () => {
		expect(component).toBeTruthy();
	});

	it('takes input', () => {
		expect(component.stations).toEqual(stations);
		expect(component.criteria).toEqual(criteria);
	});
});
