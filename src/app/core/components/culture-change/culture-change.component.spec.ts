import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers } from '@app/core';
import * as CultureActions from '@app/core/store/actions/culture.action';

import { CultureChangeComponent } from './culture-change.component';



describe('CultureChangeComponent', () => {
	let component: CultureChangeComponent;
	let fixture: ComponentFixture<CultureChangeComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CultureChangeComponent],
			imports: [StoreModule.forRoot(reducers)]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(CultureChangeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should dispatch update culture action', () => {
		const action1 = new CultureActions.UpdateCulture({cultureCode: 'en-US'});
		component.changeCulture();
		expect(store.dispatch).toHaveBeenCalledWith(action1);
	});

	it('should toggle to en-US', () => {
		const action1 = new CultureActions.UpdateCulture({cultureCode: 'en-US'});
		component.currentCulture = 'es-PR';
		component.changeCulture();
		expect(store.dispatch).toHaveBeenCalledWith(action1);
	});

	it('should toggle to es-PR', () => {
		const action1 = new CultureActions.UpdateCulture({cultureCode: 'es-PR'});
		component.currentCulture = 'en-US';
		component.changeCulture();
		expect(store.dispatch).toHaveBeenCalledWith(action1);
	});
});
