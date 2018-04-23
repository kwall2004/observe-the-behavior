import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitSeatModalComponent } from './exit-seat-modal.component';
import { SharedTestingModule, NgxBootstrapTestingModule } from '../../../../testing';

describe('ExitSeatModalComponent', () => {
	let component: ExitSeatModalComponent;
	let fixture: ComponentFixture<ExitSeatModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [SharedTestingModule, NgxBootstrapTestingModule],
			declarations: [ExitSeatModalComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ExitSeatModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
