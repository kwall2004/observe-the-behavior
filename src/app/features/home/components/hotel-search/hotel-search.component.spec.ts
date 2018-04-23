import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HotelSearchComponent } from './hotel-search.component';
import { SharedTestingModule } from '../../../../testing';

describe('HotelAvailabilitySearchComponent', () => {
	let component: HotelSearchComponent;
	let fixture: ComponentFixture<HotelSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HotelSearchComponent
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
		fixture = TestBed.createComponent(HotelSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
