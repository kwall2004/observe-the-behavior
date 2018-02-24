import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs/Subject';
import * as moment from 'moment';

import { LowFareComponent } from './low-fare.component';

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

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('emits previous week low fare search click event', () => {
		const beginDate = new Date();

		component.lowFareSearchCriteria = {
			origin: {
				stationCode: 'test',
				shortName: 'test'
			},
			destination: {
				stationCode: 'test',
				shortName: 'test'
			},
			beginDate: beginDate,
			endDate: moment(beginDate).add(3, 'days').toDate(),
			adultCount: 2,
			childCount: 0
		};

		spyOn(component.lowFareSearchClick, 'emit');
		component.onPreviousWeekClick();
		expect(component.lowFareSearchClick.emit).toHaveBeenCalledWith({
			...component.lowFareSearchCriteria,
			beginDate: moment(component.lowFareSearchCriteria.beginDate).subtract(7, 'days').toDate()
		});
	});

	it('emits next week low fare search click event', () => {
		const beginDate = new Date();

		component.lowFareSearchCriteria = {
			origin: {
				stationCode: 'test',
				shortName: 'test'
			},
			destination: {
				stationCode: 'test',
				shortName: 'test'
			},
			beginDate: beginDate,
			endDate: moment(beginDate).add(3, 'days').toDate(),
			adultCount: 2,
			childCount: 0
		};

		spyOn(component.lowFareSearchClick, 'emit');
		component.onNextWeekClick();
		expect(component.lowFareSearchClick.emit).toHaveBeenCalledWith({
			...component.lowFareSearchCriteria,
			beginDate: moment(component.lowFareSearchCriteria.beginDate).add(7, 'days').toDate()
		});
	});

	it('emits search click event', () => {
		const beginDate = new Date();

		component.searchCriteria = {
			origin: {
				stationCode: 'test',
				shortName: 'test'
			},
			destination: {
				stationCode: 'test',
				shortName: 'test'
			},
			beginDate: beginDate,
			endDate: moment(beginDate).add(3, 'days').toDate(),
			adultCount: 2,
			childCount: 0
		};

		spyOn(component.searchClick, 'emit');
		component.onDayClick({
			departureDate: moment(component.searchCriteria.beginDate).add(1, 'days').toDate()
		});
		expect(component.searchClick.emit).toHaveBeenCalledWith({
			...component.searchCriteria,
			beginDate: moment(component.searchCriteria.beginDate).add(1, 'days').toDate()
		});
	});
});
