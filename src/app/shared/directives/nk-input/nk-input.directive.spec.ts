import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NkInputDirective } from './nk-input.directive';
import { SharedTestingModule } from '../../../testing';

@Component({
	template: `
	<input nkInput/>`
})
class TestComponent { }

describe('NkInputComponent', () => {
	let fixture: ComponentFixture<TestComponent>;

	beforeEach(() => {
		fixture = TestBed.configureTestingModule({
			declarations: [TestComponent, NkInputDirective],
			imports: [SharedTestingModule]
		})
			.createComponent(TestComponent);
		fixture.detectChanges(); // initial binding
	});

	it('should apply form-control class', () => {
		const input: HTMLElement = fixture.nativeElement.querySelector('input');
		const inputClass = input.className;
		expect(inputClass).toBe('form-control');
	});
});

