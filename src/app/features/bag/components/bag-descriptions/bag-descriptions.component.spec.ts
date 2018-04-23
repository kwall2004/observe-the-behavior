import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagDescriptionsComponent } from './bag-descriptions.component';

describe('BagDescriptionsComponent', () => {
	let component: BagDescriptionsComponent;
	let fixture: ComponentFixture<BagDescriptionsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BagDescriptionsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BagDescriptionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
