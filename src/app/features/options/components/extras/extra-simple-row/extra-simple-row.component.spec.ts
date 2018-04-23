import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSimpleRowComponent } from './extra-simple-row.component';
import { SharedModule } from '../../../../../shared';

describe('ExtraSimpleRowComponent', () => {
	let component: ExtraSimpleRowComponent;
	let fixture: ComponentFixture<ExtraSimpleRowComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ExtraSimpleRowComponent],
			imports: [SharedModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ExtraSimpleRowComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
