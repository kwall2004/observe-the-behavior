import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMapsComponent } from './route-maps.component';

describe('RouteMapsComponent', () => {
	let component: RouteMapsComponent;
	let fixture: ComponentFixture<RouteMapsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RouteMapsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RouteMapsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
