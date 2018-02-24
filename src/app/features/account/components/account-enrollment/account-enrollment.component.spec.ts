import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEnrollmentComponent } from './account-enrollment.component';

describe('AccountEnrollmentComponent', () => {
	let component: AccountEnrollmentComponent;
	let fixture: ComponentFixture<AccountEnrollmentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountEnrollmentComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountEnrollmentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
