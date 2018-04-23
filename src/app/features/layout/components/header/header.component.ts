import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap';
import { AuthModalComponent } from '../../../auth';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import {
	CoreState,
	CultureUpdateCulture, HomeSetTab,
	currentCultureState, authLoggedInState, userFullNameState
} from '../../../../core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
	loggedIn$: Observable<boolean>;
	fullName$: Observable<string>;
	cultureSubscription: Subscription;
	currentCulture: string;
	currentLanguage: string;
	languageOptions = {
		'en-US': 'Español',
		'es-PR': 'English'
	};

	constructor(
		private modal: BsModalService,
		private store: Store<CoreState>
	) { }

	ngOnInit() {
		this.loggedIn$ = this.store.pipe(select(authLoggedInState));
		this.fullName$ = this.store.pipe(select(userFullNameState));

		this.cultureSubscription = this.store.select(currentCultureState).subscribe(culture => {
			this.currentCulture = culture;
			this.currentLanguage = this.languageOptions[culture];
		});
	}

	signIn() {
		this.modal.show(AuthModalComponent);
	}

	setActiveTab(tabIndex) {
		this.store.dispatch(new HomeSetTab(tabIndex));
	}

	changeCulture() {
		this.store.dispatch(new CultureUpdateCulture({ cultureCode: this.currentCulture === 'en-US' ? 'es-PR' : 'en-US' }));
	}

	ngOnDestroy() {
		if (this.cultureSubscription) {
			this.cultureSubscription.unsubscribe();
		}
	}
}
