import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPageComponent } from './account-page.component';
import { Component } from '@angular/core';
import { SharedTestingModule } from '../../../../testing';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'router-outlet',
	template: ''
})
class MockRouterOutletComponent { }

describe('AccountPageComponent', () => {
	let component: AccountPageComponent;
	let fixture: ComponentFixture<AccountPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AccountPageComponent, MockRouterOutletComponent],
			imports: [
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
