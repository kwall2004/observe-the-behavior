import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUseMilesComponent } from './account-use-miles.component';

describe('AccountUseMilesComponent', () => {
	let component: AccountUseMilesComponent;
	let fixture: ComponentFixture<AccountUseMilesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountUseMilesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountUseMilesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
