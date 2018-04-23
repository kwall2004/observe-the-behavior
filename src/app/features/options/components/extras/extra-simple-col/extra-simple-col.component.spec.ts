import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSimpleColComponent } from './extra-simple-col.component';
import { SharedModule } from '../../../../../shared';

describe('ExtraSimpleColComponent', () => {
	let component: ExtraSimpleColComponent;
	let fixture: ComponentFixture<ExtraSimpleColComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ExtraSimpleColComponent
			],
			imports: [SharedModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ExtraSimpleColComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
