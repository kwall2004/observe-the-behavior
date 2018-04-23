import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as moment from 'moment';

import { LowFareComponent } from './low-fare.component';
import { FlightSearchModel } from '../../../../core';

describe('LowFareComponent', () => {
	let component: LowFareComponent;
	let fixture: ComponentFixture<LowFareComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LowFareComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LowFareComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('is created', () => {
		expect(component).toBeTruthy();
	});

	it('takes input', () => {
		const search: FlightSearchModel = {
			index: 1,
			originStationCode: 'test',
			destinationStationCode: 'test',
			date: new Date(2018, 1, 1),
			adultCount: 2,
			childCount: 0
		};

		component.search = search;
		component.results = [{
			search: search,
			data: { test: 'test' }
		}];

		expect(component.search).toEqual(search);
		expect(component.data).toEqual({ test: 'test' });
	});

	it('emits events', () => {
		const search: FlightSearchModel = {
			index: 1,
			originStationCode: 'test',
			destinationStationCode: 'test',
			date: new Date(2018, 1, 1),
			adultCount: 2,
			childCount: 0
		};

		component.search = search;
		component.results = [{
			search: search,
			data: { test: 'test' }
		}];

		spyOn(component.lowFareSearchClick, 'emit');
		spyOn(component.searchClick, 'emit');

		component.onPreviousWeekClick();
		expect(component.lowFareSearchClick.emit).toHaveBeenCalledWith({
			...search,
			date: moment(new Date(2018, 1, 1)).subtract(7, 'days').toDate()
		});

		component.onNextWeekClick();
		expect(component.lowFareSearchClick.emit).toHaveBeenCalledWith({
			...search,
			date: moment(new Date(2018, 1, 1)).toDate()
		});

		component.onDayClick({
			departureDate: moment(new Date(2018, 2, 2)).toDate()
		});
		expect(component.searchClick.emit).toHaveBeenCalledWith({
			...search,
			date: moment(new Date(2018, 2, 2)).toDate()
		});
	});
});
