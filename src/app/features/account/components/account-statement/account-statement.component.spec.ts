import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatementComponent } from './account-statement.component';

describe('AccountStatementComponent', () => {
	let component: AccountStatementComponent;
	let fixture: ComponentFixture<AccountStatementComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountStatementComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountStatementComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
