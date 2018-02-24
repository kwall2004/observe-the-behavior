import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRedemptionRequestComponent } from './account-redemption-request.component';

describe('AccountRedemptionRequestComponent', () => {
	let component: AccountRedemptionRequestComponent;
	let fixture: ComponentFixture<AccountRedemptionRequestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountRedemptionRequestComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountRedemptionRequestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
