import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../../../material-testing';
import { FormsModule } from '@angular/forms';

import { FlightAvailabilitySearchComponent } from './flight-availability-search.component';

describe('FlightAvailabilitySearchComponent', () => {
	let component: FlightAvailabilitySearchComponent;
	let fixture: ComponentFixture<FlightAvailabilitySearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlightAvailabilitySearchComponent
			],
			imports: [
				TestingModule,
				FormsModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FlightAvailabilitySearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('emits search click event', () => {
		const form = {
			value: {
				origin: {
					stationCode: 'test',
					shortName: 'test'
				},
				destination: {
					stationCode: 'test',
					shortName: 'test'
				},
				beginDate: new Date(),
				endDate: new Date(),
				adultCount: 2,
				childCount: 0
			}
		};

		spyOn(component.searchClick, 'emit');
		component.onSearchClick(form);
		expect(component.searchClick.emit).toHaveBeenCalledWith(form.value);
	});
});
