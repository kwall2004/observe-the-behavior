import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxBootstrapTestingModule, SharedTestingModule } from '../../../../testing';
import { Component } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { TabsetComponent, TabsetConfig, TabDirective, BsModalService } from 'ngx-bootstrap';

import { HomePageComponent } from './home-page.component';
import { CoreState, reducers, HomeSetTab, homeActiveTabIndexState } from '../../../../core';

@Component({
	/* tslint:disable-next-line */
	selector: 'app-book-home',
	template: ''
})
class MockAppBookHomeComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'app-manage-travel-home',
	template: ''
})
class MockManageTravelHomeComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'app-hero-carousel',
	template: ''
})
class MockHeroCarouselComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'app-marketing-tiles',
	template: ''
})
class MockMarketingTilesComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'app-everymundo-home',
	template: ''
})
class MockEverymundoHomeComponent {
}

@Component({
	/* tslint:disable-next-line */
	selector: 'app-flight-status-home',
	template: ''
})
class MockFlightStatusHomeComponent {
}

class MockModal { }

describe('HomePageComponent', () => {
	let component: HomePageComponent;
	let fixture: ComponentFixture<HomePageComponent>;
	let store: Store<CoreState>;
	let rendererSpy: any;
	let elementRefSpy: any;
	let tab: TabDirective;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockAppBookHomeComponent,
				MockHeroCarouselComponent,
				MockMarketingTilesComponent,
				MockManageTravelHomeComponent,
				MockFlightStatusHomeComponent,
				MockEverymundoHomeComponent,
				HomePageComponent
			],
			imports: [
				NgxBootstrapTestingModule,
				StoreModule.forRoot(reducers),
				SharedTestingModule
			],
			providers: [
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
		spyOn(store, 'select').and.callThrough();

		rendererSpy = jasmine.createSpyObj('Renderer2', ['thrown']);
		elementRefSpy = jasmine.createSpyObj('ElementRef', ['thrown']);

		fixture = TestBed.createComponent(HomePageComponent);
		component = fixture.componentInstance;
		component.tabset = new TabsetComponent(new TabsetConfig(), rendererSpy);
		tab = new TabDirective(component.tabset, elementRefSpy, rendererSpy);
		component.tabset.tabs.push(tab);
		fixture.detectChanges();
	});

	it('is created', () => {
		expect(component).toBeTruthy();
	});

	it('selects state', () => {
		expect(store.select).toHaveBeenCalledWith(homeActiveTabIndexState);
	});

	it('dispatches actions', () => {
		component.onTabSelect(tab);
		expect(store.dispatch).toHaveBeenCalledWith(new HomeSetTab(0));
	});
});
