import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightStatusSubscriptionModalComponent } from './flight-status-subscription-modal.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';
import { SharedTestingModule } from '../../../../testing';

class MockModalRef { }

describe('FlightStatusSubscriptionModalComponent', () => {
	let component: FlightStatusSubscriptionModalComponent;
	let fixture: ComponentFixture<FlightStatusSubscriptionModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FlightStatusSubscriptionModalComponent],
			imports: [
				ModalModule.forRoot(),
				SharedTestingModule
			],
			providers: [
				{
					provide: BsModalRef,
					useClass: MockModalRef
				}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FlightStatusSubscriptionModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
