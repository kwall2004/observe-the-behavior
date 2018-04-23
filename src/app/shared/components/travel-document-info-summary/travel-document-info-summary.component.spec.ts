import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDocumentInfoSummaryComponent } from './travel-document-info-summary.component';
import { SharedTestingModule } from '../../../testing';

describe('TravelDocumentInfoSummaryComponent', () => {
	let component: TravelDocumentInfoSummaryComponent;
	let fixture: ComponentFixture<TravelDocumentInfoSummaryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TravelDocumentInfoSummaryComponent],
			imports: [SharedTestingModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TravelDocumentInfoSummaryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
