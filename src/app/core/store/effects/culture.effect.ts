import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, skipWhile, tap, take } from 'rxjs/operators';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';

import { CoreState } from '../../store/reducers';
import { CultureActionTypes, CultureUpdateCulture, AppActionTypes } from '../../store/actions';
import { queryParamsState } from '../../store/selectors';

@Injectable()
export class CultureEffects {
	constructor(
		private translate: TranslateService,
		private actions$: Actions,
		private store: Store<CoreState>
	) { }

	@Effect()
	setCulture$: Observable<Action> = this.actions$
		.pipe(
			ofType(AppActionTypes.START),
			switchMap(() => this.store.select(queryParamsState)
				.pipe(
					skipWhile(params => !params),
					take(1),
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
	updateCulture$: Observable<Action> = this.actions$
		.pipe(
			ofType(CultureActionTypes.UPDATE_CULTURE),
			tap<CultureUpdateCulture>((action) => this.translate.use(action.payload.cultureCode))
		);
}
