import { BsControlStatusDirective } from './bs-control-status.directive';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

@Component({
	template: `
	<input [ngModel]="test" required/>`
})
class TestComponent { }

describe('BsControlStatusDirective', () => {
	let fixture: ComponentFixture<TestComponent>;

	beforeEach(() => {
		fixture = TestBed.configureTestingModule({
			declarations: [TestComponent, BsControlStatusDirective],
			imports: [FormsModule]
		})
			.createComponent(TestComponent);
		fixture.detectChanges(); // initial binding
	});

	it('should apply is-invalid when invalid and touched', () => {
		const input: HTMLElement = fixture.nativeElement.querySelector('input');
		input.dispatchEvent(new Event('click'));
		input.dispatchEvent(new Event('blur'));
		fixture.detectChanges();
		const inputClass = input.classList.contains('is-invalid');
		expect(inputClass).toBe(true);
	});
});


