import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazmatAcceptanceModalComponent } from './hazmat-acceptance-modal.component';
import { BsModalRef } from 'ngx-bootstrap';
import { SharedTestingModule } from '../../../../testing';

class MockBsModalRef { }

describe('HazmatAcceptanceModalComponent', () => {
	let component: HazmatAcceptanceModalComponent;
	let fixture: ComponentFixture<HazmatAcceptanceModalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HazmatAcceptanceModalComponent],
			providers: [
				{
					provide: BsModalRef,
					useClass: MockBsModalRef
				}
			],
			imports: [SharedTestingModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HazmatAcceptanceModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
