import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EverymundoHomeComponent } from './everymundo-home.component';
import { SharedTestingModule } from '../../../../testing';

describe('EverymundoHomeComponent', () => {
	let component: EverymundoHomeComponent;
	let fixture: ComponentFixture<EverymundoHomeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [SharedTestingModule],
			declarations: [EverymundoHomeComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EverymundoHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
