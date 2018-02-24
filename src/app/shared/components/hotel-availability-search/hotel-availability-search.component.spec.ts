import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../../../material-testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HotelAvailabilitySearchComponent } from './hotel-availability-search.component';

describe('HotelAvailabilitySearchComponent', () => {
	let component: HotelAvailabilitySearchComponent;
	let fixture: ComponentFixture<HotelAvailabilitySearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HotelAvailabilitySearchComponent
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
		fixture = TestBed.createComponent(HotelAvailabilitySearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
