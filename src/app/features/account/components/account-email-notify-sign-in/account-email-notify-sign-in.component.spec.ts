import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEmailNotifySignInComponent } from './account-email-notify-sign-in.component';

describe('EmailNotifySignInComponent', () => {
	let component: AccountEmailNotifySignInComponent;
	let fixture: ComponentFixture<AccountEmailNotifySignInComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountEmailNotifySignInComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountEmailNotifySignInComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
