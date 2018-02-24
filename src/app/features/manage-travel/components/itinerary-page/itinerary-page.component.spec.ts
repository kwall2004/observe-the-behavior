import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryPageComponent } from './itinerary-page.component';

describe('ItineraryPageComponent', () => {
	let component: ItineraryPageComponent;
	let fixture: ComponentFixture<ItineraryPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ItineraryPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ItineraryPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
