import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { BagState, reducers } from '../../store';

import { BagsComponent } from './bags.component';

describe('BagsComponent', () => {
	let component: BagsComponent;
	let fixture: ComponentFixture<BagsComponent>;
	let store: Store<BagState>;

	beforeEach(async(() => {
		const routerStub = {
			navigate: jasmine.createSpy('navigate')
		};
		TestBed.configureTestingModule({
			providers: [{ provide: Router, useValue: routerStub }],
			declarations: [BagsComponent],
			imports: [
				StoreModule.forRoot(reducers)
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(BagsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
