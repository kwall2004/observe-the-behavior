import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '../../../testing';
import { PassengerInfoSummaryComponent } from './passenger-info-summary.component';


describe('PassengerInfoSummaryComponent', () => {
	let component: PassengerInfoSummaryComponent;
	let fixture: ComponentFixture<PassengerInfoSummaryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PassengerInfoSummaryComponent],
			imports: [SharedTestingModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PassengerInfoSummaryComponent);
		component = fixture.componentInstance;
		component.bagSelection = {};
		component.booking = {};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
