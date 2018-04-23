import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-extra-simple-row',
	templateUrl: './extra-simple-row.component.html',
	styleUrls: ['./extra-simple-row.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtraSimpleRowComponent implements OnInit {

	constructor() { }

	@Input()
	headerText: string;

	@Input()
	imagePath: string;

	ngOnInit() { }

}
