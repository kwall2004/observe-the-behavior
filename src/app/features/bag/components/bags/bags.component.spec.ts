import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { BagsComponent } from './bags.component';

describe('BagsComponent', () => {
	let component: BagsComponent;
	let fixture: ComponentFixture<BagsComponent>;
	beforeEach(async(() => {
		const routerStub = {
			navigate: jasmine.createSpy('navigate')
		};
		TestBed.configureTestingModule({
			providers: [{provide: Router, useValue: routerStub}],
			declarations: [BagsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BagsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
