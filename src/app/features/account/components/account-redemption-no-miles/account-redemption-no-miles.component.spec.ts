import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRedemptionNoMilesComponent } from './account-redemption-no-miles.component';

describe('AccountRedemptionNoMilesComponent', () => {
	let component: AccountRedemptionNoMilesComponent;
	let fixture: ComponentFixture<AccountRedemptionNoMilesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountRedemptionNoMilesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountRedemptionNoMilesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
