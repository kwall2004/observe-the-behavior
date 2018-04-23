import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatedPartnersComponent } from './dedicated-partners.component';

describe('DedicatedPartnersComponent', () => {
	let component: DedicatedPartnersComponent;
	let fixture: ComponentFixture<DedicatedPartnersComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DedicatedPartnersComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DedicatedPartnersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
