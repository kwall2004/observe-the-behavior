import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NkInputDirective } from '../../directives';
import { Component } from '@angular/core';
import { SharedTestingModule } from '../../../testing';

@Component({
	template: `	<app-input>
					<input nkInput name="promo" placeholder="Promo" [ngModel]="test" required>
				</app-input>`
})
class WrapperComponent { }


describe('NkInputComponent', () => {
	let component: WrapperComponent;
	let fixture: ComponentFixture<WrapperComponent>;



	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NkInputDirective, WrapperComponent],
			imports: [FormsModule, SharedTestingModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WrapperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
