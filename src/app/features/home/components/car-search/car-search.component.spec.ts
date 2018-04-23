import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CarSearchComponent } from './car-search.component';
import { SharedTestingModule } from '../../../../testing';

describe('CarAvailabilitySearchComponent', () => {
	let component: CarSearchComponent;
	let fixture: ComponentFixture<CarSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CarSearchComponent
			],
			imports: [
				FormsModule,
				RouterTestingModule,
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CarSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
