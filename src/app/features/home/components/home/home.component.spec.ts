import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../../../../material-testing';
import { Component, Input, Directive } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { HomeComponent } from './home.component';

import { HomeState, reducers } from '../../store';

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

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let store: Store<HomeState>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockAppBookHomeComponent,
				MockHeroCarouselComponent,
				MockMarketingTilesComponent,
				MockManageTravelHomeComponent,
				MockFlightStatusHomeComponent,
				MockEverymundoHomeComponent,
				HomeComponent
			],
			imports: [
				TestingModule,
				StoreModule.forRoot(reducers)
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
