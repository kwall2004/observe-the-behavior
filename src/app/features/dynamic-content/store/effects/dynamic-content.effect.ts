import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { DynamicContentActionTypes, SetContent } from '../actions/dynamic-content.action';
import { DynamicContentApiService } from '../../services/dynamic-content-api.service';

@Injectable()
export class DynamicContentEffects {
	constructor(
		private api: DynamicContentApiService,
		private actions: Actions
	) { }

	@Effect()
	getContent$: Observable<Action> = this.actions
		.ofType(DynamicContentActionTypes.GET_CONTENT)
		.pipe(
			mergeMap(() => this.api.getContent()),
			map(payload => new SetContent(payload))
		);
}
