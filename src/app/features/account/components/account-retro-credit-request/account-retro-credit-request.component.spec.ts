import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRetroCreditRequestComponent } from './account-retro-credit-request.component';

describe('AccountRetroCreditRequestComponent', () => {
	let component: AccountRetroCreditRequestComponent;
	let fixture: ComponentFixture<AccountRetroCreditRequestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountRetroCreditRequestComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountRetroCreditRequestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
