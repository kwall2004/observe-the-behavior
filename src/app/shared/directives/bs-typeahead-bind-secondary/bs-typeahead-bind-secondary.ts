import { Directive, Input, Host, ElementRef, ViewContainerRef, Renderer2, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NgForm, NgControl } from '@angular/forms';
import { TypeaheadDirective, ComponentLoaderFactory } from 'ngx-bootstrap';
import { Subscription } from 'rxjs/Subscription';

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: '[typeahead][bindSecondary]'
})
export class BsTypeaheadBindSecondaryDirective extends TypeaheadDirective implements OnDestroy {

	private sub: Subscription;

	// tslint:disable-next-line:no-input-rename
	@Input('bindSecondary')
	formControlToBindName: string;

	// tslint:disable-next-line:no-input-rename
	@Input('typeaheadValueField')
	valueFieldName: string;

	onSelect(event) {
		const newFormValue = { ...this.form.value };
		newFormValue[this.formControlToBindName] = event.item[this.valueFieldName];
		this.form.setValue(newFormValue);
	}

	constructor(@Host() private form: NgForm, @Host() control: NgControl, @Host() elem: ElementRef, container: ViewContainerRef, renderer: Renderer2, loader: ComponentLoaderFactory, changeDetector: ChangeDetectorRef) {
		super(control, elem, container, renderer, loader, changeDetector);

		this.sub = this.typeaheadOnSelect.subscribe(this.onSelect.bind(this));

	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
