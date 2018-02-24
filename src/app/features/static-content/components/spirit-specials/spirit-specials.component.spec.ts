import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritSpecialsComponent } from './spirit-specials.component';

describe('SpiritSpecialsComponent', () => {
	let component: SpiritSpecialsComponent;
	let fixture: ComponentFixture<SpiritSpecialsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SpiritSpecialsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SpiritSpecialsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
