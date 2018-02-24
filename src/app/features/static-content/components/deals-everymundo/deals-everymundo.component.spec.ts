import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsEverymundoComponent } from './deals-everymundo.component';

describe('EverymundoComponent', () => {
	let component: DealsEverymundoComponent;
	let fixture: ComponentFixture<DealsEverymundoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DealsEverymundoComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DealsEverymundoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
