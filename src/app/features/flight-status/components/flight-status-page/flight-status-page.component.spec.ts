import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightStatusPageComponent } from './flight-status-page.component';

describe('FlightStatusPageComponent', () => {
	let component: FlightStatusPageComponent;
	let fixture: ComponentFixture<FlightStatusPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FlightStatusPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FlightStatusPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
