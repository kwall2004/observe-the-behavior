import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FareClubEnrollmentComponent } from './fare-club-enrollment.component';

describe('FareClubComponent', () => {
	let component: FareClubEnrollmentComponent;
	let fixture: ComponentFixture<FareClubEnrollmentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FareClubEnrollmentComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FareClubEnrollmentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
