import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { CoreState, AuthLogin, authLoggedInState, authErrorsState } from '../../../../core/store';
import { CredentialsModel } from '../../../../core/models';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
	templateUrl: './auth-modal.component.html',
	styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit, OnDestroy {
	loggedIn: Subscription;
	loginErrors$: Observable<any>;
	constructor(
		public modalRef: BsModalRef,
		private store: Store<CoreState>
	) { }

	ngOnInit() {
		this.loggedIn = this.store.select(authLoggedInState).subscribe((loggedIn) => {
			if (loggedIn) {
				this.modalRef.hide();
			}
		});
		this.loginErrors$ = this.store.pipe(select(authErrorsState));
	}

	onLogin(credentials: CredentialsModel) {
		this.store.dispatch(new AuthLogin(credentials));
	}

	hide() {
		this.modalRef.hide();
	}

	ngOnDestroy() {
		this.loggedIn.unsubscribe();
	}
}
