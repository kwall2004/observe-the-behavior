import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazmatAcceptanceComponent } from './hazmat-acceptance.component';

describe('HazmatAcceptanceComponent', () => {
	let component: HazmatAcceptanceComponent;
	let fixture: ComponentFixture<HazmatAcceptanceComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HazmatAcceptanceComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HazmatAcceptanceComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
