import { Component, OnInit, AfterViewInit, ContentChild, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NkInputDirective } from '../../directives/nk-input/nk-input.directive';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit {

	@ContentChild(NgModel) control: NgModel;
	@ContentChild(NkInputDirective) input: NkInputDirective;
	@Input() autoLabel = true;
	@Input() labelText: string;

	constructor() { }

	ngOnInit() { }

	ngAfterViewInit() {
		// adding id for label a11y
		this.input.el.nativeElement.id = this.control.name;
	}

}
