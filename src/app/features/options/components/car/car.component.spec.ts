import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarComponent } from './car.component';
import { SharedTestingModule } from '../../../../testing';

describe('CarComponent', () => {
	let component: CarComponent;
	let fixture: ComponentFixture<CarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CarComponent],
			imports: [
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
