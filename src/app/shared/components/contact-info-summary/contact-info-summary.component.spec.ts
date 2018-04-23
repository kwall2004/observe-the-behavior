import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoSummaryComponent } from './contact-info-summary.component';
import { SharedTestingModule } from '../../../testing';

describe('ContactInfoSummaryComponent', () => {
	let component: ContactInfoSummaryComponent;
	let fixture: ComponentFixture<ContactInfoSummaryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContactInfoSummaryComponent],
			imports: [SharedTestingModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContactInfoSummaryComponent);
		component = fixture.componentInstance;
		component.contacts = { p: {} };
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
