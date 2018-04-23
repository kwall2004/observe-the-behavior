import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInfoSummaryComponent } from './flight-info-summary.component';
import { SharedTestingModule } from '../../../testing';

describe('FlightInfoSummaryComponent', () => {
	let component: FlightInfoSummaryComponent;
	let fixture: ComponentFixture<FlightInfoSummaryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FlightInfoSummaryComponent],
			imports: [SharedTestingModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FlightInfoSummaryComponent);
		component = fixture.componentInstance;
		component.booking = {};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
