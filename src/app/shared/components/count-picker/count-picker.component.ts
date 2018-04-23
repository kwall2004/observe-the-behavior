import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
	selector: 'app-count-picker',
	templateUrl: './count-picker.component.html',
	styleUrls: ['./count-picker.component.scss'],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: CountPickerComponent,
		multi: true
	}]
})
export class CountPickerComponent implements ControlValueAccessor {
	@Input() count = 0;
	@Input() max = 9;
	@Input() min = 0;
	@Input() disabled = false;
	@Input() maxDisabled = false;

	@Output() onAdd = new EventEmitter<number>();
	@Output() onSubtract = new EventEmitter<number>();

	constructor() { }

	onChange;
	onTouched;

	writeValue(value: number): void {
		this.count = value;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	increment() {
		if (!this.disabled && !this.maxDisabled && this.count < this.max) {
			this.count++;
			if (this.onChange) {
				this.onChange(this.count);
			}
			this.onAdd.emit(this.count);
		}
	}

	decrement() {
		if (!this.disabled && this.count > this.min) {
			this.count--;
			if (this.onChange) {
				this.onChange(this.count);
			}
			this.onSubtract.emit(this.count);
		}
	}

	calculateChange($event) {
		// todo add validation to these events being emitted, to prevent them from emitting over the max or min.
		// this would allow us to not validate in the bag.effects.
		// add
		if ($event.data > this.count && $event.data <= this.max) {
			const dif = $event.data - this.count;
			for (let i = 0; i < dif; i++) {
				this.count++;
				if (this.onChange) {
					this.onChange(this.count);
				}
				this.onAdd.emit(this.count);
			}
			// subtract
		} else {
			if ($event.data >= this.min) {
				const dif = this.count - $event.data;
				for (let i = 0; i < dif; i++) {
					this.count--;
					if (this.onChange) {
						this.onChange(this.count);
					}
					this.onSubtract.emit(this.count);
				}
			}
		}
	}
}
