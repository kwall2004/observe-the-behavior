import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef, ModalModule } from 'ngx-bootstrap';

import { SharedModule } from '../../../../../shared';
import { ShortcutSecurityOptionModel, ShortcutSecurityOptionsModel } from '../models';
import { ShortcutSecurityModalComponent } from './shortcut-security-modal.component';

class MockModalRef { }

describe('ShortcutSecurityModalComponent', () => {
	let component: ShortcutSecurityModalComponent;
	let fixture: ComponentFixture<ShortcutSecurityModalComponent>;

	const scsOptions = new ShortcutSecurityOptionsModel([
		{ selected: true, price: 1.00, description: 'option 1' } as ShortcutSecurityOptionModel,
		{ selected: false, price: 2.00, description: 'option 2' } as ShortcutSecurityOptionModel
	]);

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ShortcutSecurityModalComponent
			],
			imports: [
				SharedModule,
				ModalModule.forRoot()
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
		fixture = TestBed.createComponent(ShortcutSecurityModalComponent);
		component = fixture.componentInstance;
		component.options = scsOptions;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(fixture.componentInstance instanceof ShortcutSecurityModalComponent)
			.toBe(true);
	});
});
