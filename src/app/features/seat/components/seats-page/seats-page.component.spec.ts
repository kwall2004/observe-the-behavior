import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { CoreState, reducers } from '../../../../core';

import { SeatsPageComponent } from './seats-page.component';
import { SharedTestingModule, NgxBootstrapTestingModule } from '../../../../testing';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-unit',
	template: ''
})
class MockUnitComponent {
	@Input() bigFrontSeat: any;
	@Input() unit: any;
	@Input() fees: boolean;
}

describe('SeatsPageComponent', () => {
	let component: SeatsPageComponent;
	let fixture: ComponentFixture<SeatsPageComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		const routerStub = {
			navigate: jasmine.createSpy('navigate')
		};
		TestBed.configureTestingModule({
			providers: [{ provide: Router, useValue: routerStub }],
			declarations: [
				SeatsPageComponent,
				MockUnitComponent
			],
			imports: [
				StoreModule.forRoot(reducers),
				SharedTestingModule,
				NgxBootstrapTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(SeatsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
