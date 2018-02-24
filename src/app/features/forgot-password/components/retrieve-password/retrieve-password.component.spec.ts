import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievePasswordComponent } from './retrieve-password.component';

describe('RetrieveComponent', () => {
	let component: RetrievePasswordComponent;
	let fixture: ComponentFixture<RetrievePasswordComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RetrievePasswordComponent]
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
