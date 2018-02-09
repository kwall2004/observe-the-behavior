import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, skipWhile, filter, tap } from 'rxjs/operators';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';

import { CoreState } from '../index';
import * as AppActions from '../actions/app.action';
import * as  fromCulture from '../actions/culture.action';



@Injectable()
export class CultureEffects {
	constructor(
		private translate: TranslateService,
		private actions: Actions,
		private store: Store<CoreState>,
	) { }

	@Effect()
	setCulture$: Observable<any> = this.actions
		.ofType<AppActions.AppStart>(AppActions.APP_START).pipe(
		switchMap(() => this.store.select(state => state.router && state.router.state.queryParams)
			.pipe(
			skipWhile(params => !params),
			map(queryParams => {
				// todo get default culture from config ?
				let culture = 'es-PR';
				if (queryParams.culture) {
					if (queryParams.culture.toLowerCase() === 'en-us' || queryParams.culture.toLowerCase() === 'es-pr') {
						culture = queryParams.culture;
					}
				}
				this.translate.setDefaultLang(culture);
				this.translate.use(culture);
				return new fromCulture.UpdateCulture({ cultureCode: culture });
			})
			)
		)
		);

	@Effect({ dispatch: false })
	updateCulture$: Observable<any> = this.actions
		.ofType<fromCulture.UpdateCulture>(fromCulture.UPDATE_CULTURE)
		.pipe(tap((action) => this.translate.use(action.payload.cultureCode)));
}
