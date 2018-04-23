import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsSummaryComponent } from './options-summary.component';
import { SharedTestingModule } from '../../../../testing';

describe('OptionsSummaryComponent', () => {
	let component: OptionsSummaryComponent;
	let fixture: ComponentFixture<OptionsSummaryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OptionsSummaryComponent],
			imports: [
				SharedTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OptionsSummaryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
