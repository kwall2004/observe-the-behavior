import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HotelsComponent } from './hotels.component';

describe('HotelsComponent', () => {
	let component: HotelsComponent;
	let fixture: ComponentFixture<HotelsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HotelsComponent
			],
			imports: [
				RouterTestingModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HotelsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
