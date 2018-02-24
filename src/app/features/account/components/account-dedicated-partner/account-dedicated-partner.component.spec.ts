import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDedicatedPartnerComponent } from './account-dedicated-partner.component';

describe('AccountDedicatedPartnerComponent', () => {
	let component: AccountDedicatedPartnerComponent;
	let fixture: ComponentFixture<AccountDedicatedPartnerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountDedicatedPartnerComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountDedicatedPartnerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
