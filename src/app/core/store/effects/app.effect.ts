import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { AppActionTypes, AppAddError } from '../../store/actions';


@Injectable()
export class AppEffects {
	constructor(
		private toastr: ToastrService,
		private actions$: Actions
	) { }

	@Effect({ dispatch: false })
	appError$: Observable<Action> = this.actions$
		.pipe(
			ofType(AppActionTypes.ADD_ERROR),
			tap<AppAddError>((action) => {
				const error = action.payload;
				const message = error.error && error.error.errors && error.error.errors.reduce((result, subError) => result + ' ' + (subError.message || subError.rawMessage), '');

				this.toastr.error(message, error.status + ' ' + error.statusText);
				console.error(error);
			})
		);

	@Effect({ dispatch: false })
	appClearErrors$: Observable<Action> = this.actions$
		.pipe(
			ofType(AppActionTypes.CLEAR_ERRORS),
			tap(() => this.toastr.clear())
		);
}
