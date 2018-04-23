import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as fromComponents from '../index';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, CoreState } from '../../../../core';
import { SharedTestingModule } from '../../../../testing';
import { BsModalService } from 'ngx-bootstrap';

class MockModal { }

describe('ReservationSummaryPageComponent', () => {
	let component: fromComponents.ReservationSummaryPageComponent;
	let fixture: ComponentFixture<fromComponents.ReservationSummaryPageComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				...fromComponents.components
			],
			providers: [
				{
					provide: BsModalService,
					useClass: MockModal,
				}
			],
			imports: [
				StoreModule.forRoot(reducers),
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();
		spyOn(store, 'select').and.callThrough();

		fixture = TestBed.createComponent(fromComponents.ReservationSummaryPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
