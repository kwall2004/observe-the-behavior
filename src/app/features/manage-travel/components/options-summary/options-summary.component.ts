import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExtrasModel } from '../../models';

@Component({
	selector: 'app-options-summary',
	templateUrl: './options-summary.component.html',
	styleUrls: ['./options-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionsSummaryComponent implements OnInit {

	extras$: Observable<ExtrasModel>;

	constructor() { }

	ngOnInit() {

		// todo: wire into store
		this.extras$ = Observable.from([
			{
				flexSelected: true,
				shortcutSecuritySelected: false,
				shortcutBoardingSelected: true,
				checkInSelected: false
			} as ExtrasModel
		]);
	}

}
