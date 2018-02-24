import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingTilesComponent } from './marketing-tiles.component';

describe('MarketingTilesComponent', () => {
	let component: MarketingTilesComponent;
	let fixture: ComponentFixture<MarketingTilesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MarketingTilesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MarketingTilesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
