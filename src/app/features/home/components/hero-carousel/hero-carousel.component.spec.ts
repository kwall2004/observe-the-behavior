import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCarouselComponent } from './hero-carousel.component';

describe('HeroCarouselComponent', () => {
	let component: HeroCarouselComponent;
	let fixture: ComponentFixture<HeroCarouselComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HeroCarouselComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeroCarouselComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
