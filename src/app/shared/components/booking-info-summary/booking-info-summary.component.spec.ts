import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingInfoSummaryComponent } from './booking-info-summary.component';
import { SharedTestingModule } from '../../../testing';

describe('BookingInfoSummaryComponent', () => {
	let component: BookingInfoSummaryComponent;
	let fixture: ComponentFixture<BookingInfoSummaryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BookingInfoSummaryComponent],
			imports: [SharedTestingModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BookingInfoSummaryComponent);
		component = fixture.componentInstance;
		component.booking = { info: {} };
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
