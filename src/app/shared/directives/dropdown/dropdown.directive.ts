import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDropdown]',
	exportAs: 'app-dropdown'
})
export class DropdownDirective {
	constructor(
		private elementRef: ElementRef,
		private renderer: Renderer2
	) { }

	isShown = false;

	show(): void {
		this.renderer.addClass(this.elementRef.nativeElement, 'show');
		this.isShown = true;
	}

	hide(): void {
		this.renderer.removeClass(this.elementRef.nativeElement, 'show');
		this.isShown = false;
	}

	toggle(): void {
		if (this.isShown) {
			this.hide();
		} else {
			this.show();
		}
	}
}
