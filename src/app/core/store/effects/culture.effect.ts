import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, skipWhile, filter, tap } from 'rxjs/operators';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';

import { CoreState } from '../../store/reducers';
import { AppActionTypes, AppStart, CultureActionTypes, CultureUpdateCulture } from '../../store/actions';
import { queryParams } from '../../store/selectors';

@Injectable()
export class CultureEffects {
	constructor(
		private translate: TranslateService,
		private actions: Actions,
		private store: Store<CoreState>
	) { }

	@Effect()
	setCulture$: Observable<any> = this.actions
		.ofType<AppStart>(AppActionTypes.APP_START).pipe(
			switchMap(() => this.store.select(queryParams)
				.pipe(
					skipWhile(params => !params),
					map(params => {
						// todo get default culture from config ?
						let culture = 'en-US';
						if (params.culture) {
							if (params.culture.toLowerCase() === 'en-us' || params.culture.toLowerCase() === 'es-pr') {
								culture = params.culture;
							}
						}
						this.translate.setDefaultLang(culture);
						this.translate.use(culture);
						return new CultureUpdateCulture({ cultureCode: culture });
					})
				)
			)
		);

	@Effect({ dispatch: false })
	updateCulture$: Observable<any> = this.actions
		.ofType<CultureUpdateCulture>(CultureActionTypes.UPDATE_CULTURE)
		.pipe(tap((action) => this.translate.use(action.payload.cultureCode)));
}
