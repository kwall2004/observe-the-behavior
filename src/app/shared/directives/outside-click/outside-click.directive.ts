import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
	selector: '[appOutsideClick]'
})
export class OutsideClickDirective {
	constructor(private elementRef: ElementRef) { }

	@Output() outsideClick = new EventEmitter<MouseEvent>();

	@HostListener('document:click', ['$event', '$event.target'])
	public onClick(event: MouseEvent, targetElement: HTMLElement): void {
		if (!targetElement) {
			return;
		}

		const clickedInside = this.elementRef.nativeElement.contains(targetElement);
		if (!clickedInside) {
			this.outsideClick.emit(event);
		}
	}
}
