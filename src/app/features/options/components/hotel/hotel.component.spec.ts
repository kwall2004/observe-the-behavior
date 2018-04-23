import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelComponent } from './hotel.component';
import { SharedTestingModule } from '../../../../testing';

describe('HotelComponent', () => {
	let component: HotelComponent;
	let fixture: ComponentFixture<HotelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HotelComponent],
			imports: [
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HotelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
