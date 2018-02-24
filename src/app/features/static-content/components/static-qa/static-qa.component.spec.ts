import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticQaComponent } from './static-qa.component';

describe('StaticQaComponent', () => {
	let component: StaticQaComponent;
	let fixture: ComponentFixture<StaticQaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [StaticQaComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StaticQaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
