import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap';

import { RetrievePasswordComponent } from './retrieve-password.component';
import { ResetPasswordService } from '../../services/reset-password.service';
import { SharedTestingModule } from '../../../../testing';

class MockModal { }
class MockResetPasswordService { }
describe('RetrieveComponent', () => {
	let component: RetrievePasswordComponent;
	let fixture: ComponentFixture<RetrievePasswordComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				RetrievePasswordComponent
			],
			providers: [
				{
					provide: BsModalService,
					useClass: MockModal,
				},
				{
					provide: ResetPasswordService,
					useClass: MockResetPasswordService
				}
			],
			imports: [
				FormsModule,
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetrievePasswordComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
