import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailComponent } from './flight-detail.component';
import { SharedModule } from '../../../../shared';
import { SharedTestingModule } from '../../../../testing';

describe('FlightDetailComponent', () => {
	let component: FlightDetailComponent;
	let fixture: ComponentFixture<FlightDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FlightDetailComponent],
			imports: [
				SharedModule,
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FlightDetailComponent);
		component = fixture.componentInstance;
		component.flightInfo = {
			actualArrivalDateTime: '2018-03-29T23:40:00',
			actualDepartureDateTime: '2018-03-29T21:07:00',
			arrivalGate: '',
			arrivalStation: 'MC CARRAN INTL',
			arrivalStationCode: 'LAS',
			arrivalTerminal: '1',
			cancelled: false,
			departureGate: '',
			departureStation: 'FT LAUDERDALE HOLLYWOOD',
			departureStationCode: 'FLL',
			departureTerminal: '4',
			estimatedArrivalDateTime: '2018-03-29T23:40:00',
			estimatedDepartureDateTime: '2018-03-29T21:07:00',
			flightDate: '2018-03-30T00:00:00',
			flightNumber: '777',
			hoursDuration: 5,
			inDateTime: null,
			journeyID: 1,
			legStatus: 'OnTime',
			newArrivalCity: '',
			newDepartureCity: '',
			offDateTime: null,
			onDateTime: null,
			minutesDuration: 33,
			outDateTime: null,
			scheduledArrivalDateTime: '2018-03-29T23:40:00',
			scheduledDepartureDateTime: '2018-03-29T21:07:00',
			sequence: 10
		};

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
