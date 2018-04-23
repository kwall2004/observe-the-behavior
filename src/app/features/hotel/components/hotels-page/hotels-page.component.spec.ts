import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HotelsPageComponent } from './hotels-page.component';

describe('HotelsPageComponent', () => {
	let component: HotelsPageComponent;
	let fixture: ComponentFixture<HotelsPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HotelsPageComponent
			],
			imports: [
				RouterTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HotelsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
