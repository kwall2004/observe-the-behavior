import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Directive } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

@Directive({
	/* tslint:disable-next-line */
	selector: 'a[mat-tab-link]'
})
class MockTabLinkDirective {
	@Input() active: any;
}

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockTabLinkDirective,
				HomeComponent
			],
			imports: [
				RouterTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
