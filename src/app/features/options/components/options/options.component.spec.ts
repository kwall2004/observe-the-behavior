import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { OptionsComponent } from './options.component';
import * as fromComponents from '../../components';

describe('SeatsComponent', () => {
	let component: OptionsComponent;
	let fixture: ComponentFixture<OptionsComponent>;

	beforeEach(async(() => {
		const routerStub = {
			navigate: jasmine.createSpy('navigate')
		};
		TestBed.configureTestingModule({
			providers: [{ provide: Router, useValue: routerStub }],
			declarations: [...fromComponents.components]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OptionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});


