import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef } from 'ngx-bootstrap';

import { RetrievePasswordInstructionComponent } from './retrieve-password-instruction.component';
import { SharedTestingModule } from '../../../testing';

class MockBsModalRef { }

describe('RetrievePasswordInstructionComponent', () => {
	let component: RetrievePasswordInstructionComponent;
	let fixture: ComponentFixture<RetrievePasswordInstructionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RetrievePasswordInstructionComponent],
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
		fixture = TestBed.createComponent(RetrievePasswordInstructionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
