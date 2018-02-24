import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfileEditComponent } from './account-profile-edit.component';

describe('AccountProfileEditComponent', () => {
	let component: AccountProfileEditComponent;
	let fixture: ComponentFixture<AccountProfileEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountProfileEditComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountProfileEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
