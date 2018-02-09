import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { CoreState, getCurrentCulture } from '../../store';
import * as fromCulture from '../../store/actions/culture.action';

@Component({
	selector: 'app-culture-change',
	templateUrl: './culture-change.component.html',
	styleUrls: ['./culture-change.component.scss']
})
export class CultureChangeComponent implements OnInit {

	constructor(private store: Store<CoreState>) { }
	currentCulture: string;
	currentLanguage: string;
	languageOptions = {
		'en-US': 'Espanol',
		'es-PR': 'English'
	};

	ngOnInit() {
		this.store.select(getCurrentCulture).subscribe(culture => {
			this.currentCulture = culture;
			this.currentLanguage = this.languageOptions[culture];
		});
	}

	changeCulture() {
		this.store.dispatch(new fromCulture.UpdateCulture({cultureCode: this.currentCulture === 'en-US' ? 'es-PR' : 'en-US'}));
	}
}
