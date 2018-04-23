import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightStatusPageComponent } from './flight-status-page.component';
import { FlightStatusSearchComponent } from '../flight-status-search/flight-status-search.component';
import { FlightDetailComponent } from '../flight-detail/flight-detail.component';

import { StoreModule, Store } from '@ngrx/store';
import { reducers as fsReducers, FlightStatusGetStatusSuccess } from '../../store';
import { reducers as coreReducers, CoreState } from '../../../../core';
import { SharedModule } from '../../../../shared';
import { SharedTestingModule } from '../../../../testing';

describe('FlightStatusPageComponent', () => {
	let store: Store<CoreState>;
	let component: FlightStatusPageComponent;
	let fixture: ComponentFixture<FlightStatusPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlightStatusPageComponent,
				FlightStatusSearchComponent,
				FlightDetailComponent
			],
			imports: [
				StoreModule.forRoot(coreReducers),
				StoreModule.forFeature('flightStatus', fsReducers),
				SharedModule,
				SharedTestingModule
			]
		})
			.compileComponents();

		store = TestBed.get(Store);
	}));

	beforeEach(() => {
		store.dispatch(new FlightStatusGetStatusSuccess(
			[
				{
					journeyID: 1,
					arrivalCity: 'arrival station',
					arrivalStationCode: 'ZZZ',
					departureCity: 'departure station',
					departureStationCode: 'AAA'
				}
			]
		));

		fixture = TestBed.createComponent(FlightStatusPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
