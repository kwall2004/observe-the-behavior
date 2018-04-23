import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { CoreState, reducers } from '../../../../core';

import { BagsPageComponent } from './bags-page.component';
import { SharedTestingModule, NgxBootstrapTestingModule } from '../../../../testing';
import { ModalModule } from 'ngx-bootstrap';
import { Component, Input } from '@angular/core';


@Component({
	selector: 'app-bag-descriptions',
	template: ''
})
class MockBagDescriptionsComponent {
	@Input() carryOnSsr;
	@Input() checkedSsr;
}
describe('BagsPageComponent', () => {
	let component: BagsPageComponent;
	let fixture: ComponentFixture<BagsPageComponent>;
	let store: Store<CoreState>;

	beforeEach(async(() => {
		const routerStub = {
			navigate: jasmine.createSpy('navigate')
		};
		TestBed.configureTestingModule({
			providers: [{ provide: Router, useValue: routerStub }],
			declarations: [BagsPageComponent, MockBagDescriptionsComponent],
			imports: [
				StoreModule.forRoot(reducers),
				SharedTestingModule,
				NgxBootstrapTestingModule,
				ModalModule.forRoot()
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(BagsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
