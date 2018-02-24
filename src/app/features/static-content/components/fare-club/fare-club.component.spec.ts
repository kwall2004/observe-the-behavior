import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FareClubComponent } from './fare-club.component';

describe('FareClubComponent', () => {
	let component: FareClubComponent;
	let fixture: ComponentFixture<FareClubComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FareClubComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FareClubComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
