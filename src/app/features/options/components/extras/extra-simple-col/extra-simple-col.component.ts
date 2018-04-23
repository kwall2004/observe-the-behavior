import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-extra-simple-col',
	templateUrl: './extra-simple-col.component.html',
	styleUrls: [
		'./extra-simple-col.component.scss',
		'../extras-simple/extras-simple.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtraSimpleColComponent implements OnInit {

	@Input()
	headerText: string;

	@Input()
	imagePath: string;

	@Input()
	displayPrice: number;

	@Input()
	priceHeader: string;

	@Input()
	priceFooter: string;

	@Input()
	selectText: string;

	@Input()
	deselectText: string;

	@Input()
	enabled: boolean;

	@Input()
	selected: boolean;

	@Output()
	selectClicked: EventEmitter<void> = new EventEmitter();

	@Output()
	deselectClicked: EventEmitter<void> = new EventEmitter();

	constructor() { }

	ngOnInit() { }

}
