import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Directive } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { BookPathComponent } from './book-path.component';

@Directive({
	/* tslint:disable-next-line */
	selector: 'button[mat-button]'
})
class MockButtonDirective {
	@Input() matMenuTriggerFor: any;
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-menu',
	template: ''
})
class MockMenuComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'mat-toolbar',
	template: ''
})
class MockToolbarComponent {
}

describe('BookingPathComponent', () => {
	let component: BookPathComponent;
	let fixture: ComponentFixture<BookPathComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockButtonDirective,
				MockMenuComponent,
				MockToolbarComponent,
				BookPathComponent
			],
			imports: [
				RouterTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BookPathComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
