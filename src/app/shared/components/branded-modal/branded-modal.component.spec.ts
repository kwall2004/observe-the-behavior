import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandedModelComponent } from './branded-modal.component';

describe('BrandedModalComponent', () => {
	let component: BrandedModelComponent;
	let fixture: ComponentFixture<BrandedModelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BrandedModelComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrandedModelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
