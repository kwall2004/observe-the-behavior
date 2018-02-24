import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAdvisoryComponent } from './travel-advisory.component';

describe('TravelAdvisoryComponent', () => {
	let component: TravelAdvisoryComponent;
	let fixture: ComponentFixture<TravelAdvisoryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TravelAdvisoryComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TravelAdvisoryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
