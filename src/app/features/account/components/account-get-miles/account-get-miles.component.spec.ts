import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGetMilesComponent } from './account-get-miles.component';

describe('AccountGetMilesComponent', () => {
	let component: AccountGetMilesComponent;
	let fixture: ComponentFixture<AccountGetMilesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountGetMilesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountGetMilesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
