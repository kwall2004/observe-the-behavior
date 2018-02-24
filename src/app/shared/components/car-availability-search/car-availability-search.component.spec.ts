import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../../../material-testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CarAvailabilitySearchComponent } from './car-availability-search.component';

describe('CarAvailabilitySearchComponent', () => {
	let component: CarAvailabilitySearchComponent;
	let fixture: ComponentFixture<CarAvailabilitySearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CarAvailabilitySearchComponent
			],
			imports: [
				TestingModule,
				FormsModule,
				RouterTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CarAvailabilitySearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
