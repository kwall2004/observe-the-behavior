import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreGoComponent } from './more-go.component';

describe('MoreGoComponent', () => {
	let component: MoreGoComponent;
	let fixture: ComponentFixture<MoreGoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MoreGoComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MoreGoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
