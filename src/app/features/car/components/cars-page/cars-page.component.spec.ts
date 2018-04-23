import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CarsPageComponent } from './cars-page.component';

describe('CarsPageComponent', () => {
	let component: CarsPageComponent;
	let fixture: ComponentFixture<CarsPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CarsPageComponent
			],
			imports: [
				RouterTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CarsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
