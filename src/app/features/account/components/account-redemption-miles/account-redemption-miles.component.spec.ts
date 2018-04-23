import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRedemptionMilesComponent } from './account-redemption-miles.component';

describe('AccountRedemptionMilesComponent', () => {
	let component: AccountRedemptionMilesComponent;
	let fixture: ComponentFixture<AccountRedemptionMilesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountRedemptionMilesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountRedemptionMilesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
