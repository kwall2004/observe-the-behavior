import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { SeatState, reducers } from '../../store';

import { SeatsComponent } from './seats.component';

describe('SeatsComponent', () => {
	let component: SeatsComponent;
	let fixture: ComponentFixture<SeatsComponent>;
	let store: Store<SeatState>;

	beforeEach(async(() => {
		const routerStub = {
			navigate: jasmine.createSpy('navigate')
		};
		TestBed.configureTestingModule({
			providers: [{ provide: Router, useValue: routerStub }],
			declarations: [SeatsComponent],
			imports: [StoreModule.forRoot(reducers)]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(SeatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
