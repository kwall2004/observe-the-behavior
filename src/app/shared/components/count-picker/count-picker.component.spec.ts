import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountPickerComponent } from './count-picker.component';

describe('CountPickerComponent', () => {
	let component: CountPickerComponent;
	let fixture: ComponentFixture<CountPickerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CountPickerComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CountPickerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
