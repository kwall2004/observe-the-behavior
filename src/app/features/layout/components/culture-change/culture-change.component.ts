import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { CoreState, getCurrentCulture, CultureUpdateCulture } from '../../../../core/store';

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
		'en-US': 'Español',
		'es-PR': 'English'
	};

	ngOnInit() {
		this.store.select(getCurrentCulture).subscribe(culture => {
			this.currentCulture = culture;
			this.currentLanguage = this.languageOptions[culture];
		});
	}

	changeCulture() {
		this.store.dispatch(new CultureUpdateCulture({ cultureCode: this.currentCulture === 'en-US' ? 'es-PR' : 'en-US' }));
	}
}
