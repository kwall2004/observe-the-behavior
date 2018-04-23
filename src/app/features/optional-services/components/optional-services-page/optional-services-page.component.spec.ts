import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxBootstrapTestingModule, SharedTestingModule } from '../../../../testing';
import { Store, StoreModule } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap';

import { OptionalServicesPageComponent } from './optional-services-page.component';
import { CoreState, reducers } from '../../../../core';

class MockModal { }

describe('OptionalServicesPageComponent', () => {
	let component: OptionalServicesPageComponent;
	let fixture: ComponentFixture<OptionalServicesPageComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OptionalServicesPageComponent],
			imports: [
				FormsModule,
				NgxBootstrapTestingModule,
				SharedTestingModule,
				StoreModule.forRoot(reducers)
			],
			providers: [
				NgForm,
				{
					provide: BsModalService,
					useClass: MockModal
				}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(OptionalServicesPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
