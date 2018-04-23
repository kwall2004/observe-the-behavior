import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfileComponent } from './account-profile.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../../core';
import { SharedTestingModule } from '../../../../testing';

describe('AccountProfileComponent', () => {
	let component: AccountProfileComponent;
	let fixture: ComponentFixture<AccountProfileComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountProfileComponent],
			imports: [
				StoreModule.forRoot(reducers),
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountProfileComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
