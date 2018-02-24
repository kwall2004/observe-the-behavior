import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../../../material-testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BookPathComponent } from './book-path.component';

describe('BookingPathComponent', () => {
	let component: BookPathComponent;
	let fixture: ComponentFixture<BookPathComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				BookPathComponent
			],
			imports: [
				TestingModule,
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
