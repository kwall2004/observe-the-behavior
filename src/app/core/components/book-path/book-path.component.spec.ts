import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import * as StoreFunctions from '@ngrx/store';

import { reducers, currentUrlState, bookingState, shoppingCartVisitedPagesState } from '../../store';

import { BookPathComponent } from './book-path.component';
import { ensureObjectIsMockable } from '../../../testing';

describe('BookPathComponent', () => {
	let component: BookPathComponent;
	let fixture: ComponentFixture<BookPathComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				BookPathComponent
			],
			imports: [
				RouterTestingModule,
				StoreModule.forRoot(reducers)
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		ensureObjectIsMockable(StoreFunctions, 'select');
		spyOn(StoreFunctions, 'select').and.callThrough();

		fixture = TestBed.createComponent(BookPathComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('is created', () => {
		expect(component).toBeTruthy();
	});

	it('selects state', () => {
		expect(StoreFunctions.select).toHaveBeenCalledWith(currentUrlState);
		expect(StoreFunctions.select).toHaveBeenCalledWith(bookingState);
		expect(StoreFunctions.select).toHaveBeenCalledWith(shoppingCartVisitedPagesState);
	});
});
