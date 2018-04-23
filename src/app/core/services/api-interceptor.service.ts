import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, finalize, map, tap, mergeMap, share, skipWhile, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

import { LocalStorageService } from './local-storage.service';

import { AppSetLoading, AuthGetTokenData, AuthSetTokenData } from '../store/actions';
import { authTokenDataState } from '../store/selectors';
import { CoreState } from '../../core/store/reducers';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
	tokenData$: Observable<any>;
	tokenData: any;
	gettingTokenData = false;
	lastTokenUsageTime: number;
	bufferTime = 30000;

	constructor(
		private store: Store<CoreState>,
		private storage: LocalStorageService
	) {
		this.gettingTokenData = true;
		this.tokenData$ = store
			.pipe(
				select(authTokenDataState),
				skipWhile(tokenData => {
					if (!this.tokenData) {
						this.tokenData = tokenData;
						this.lastTokenUsageTime = Number(this.storage.getItem('lastTokenUsageTime'));
						return this.isTokenNullOrExpired(tokenData);
					}

					return tokenData.token === this.tokenData.token;
				}),
				take(1),
				map(tokenData => {
					this.gettingTokenData = false;
					this.tokenData = tokenData;
					return this.tokenData;
				}),
				share()
			);
	}

	isTokenNullOrExpired(tokenData: any): boolean {
		const currentTime = new Date().getTime();
		const timeSinceLastUsage = currentTime - this.lastTokenUsageTime;
		const idleTimeout = (tokenData.idleTimeoutInMinutes * 60) * 1000;

		if (!tokenData || !tokenData.token || timeSinceLastUsage > (idleTimeout - this.bufferTime)) {
			this.gettingTokenData = true;
			this.store.dispatch(new AuthGetTokenData());
			return true;
		}

		return false;
	}

	getTokenData(): Observable<any> {
		if (this.gettingTokenData || this.isTokenNullOrExpired(this.tokenData)) {
			return this.tokenData$;
		}

		return of(this.tokenData);
	}

	getNewRequest(request: HttpRequest<any>): Observable<HttpRequest<any>> {
		const headers = {
			'Content-Type': 'application/json',
			'Ocp-Apim-Subscription-Key': environment.dotRezSubscriptionKey
		};

		if (!(request.url.endsWith('token') && request.method === 'POST')) {
			return this.getTokenData()
				.pipe(
					mergeMap(tokenData => {
						this.lastTokenUsageTime = new Date().getTime();
						this.storage.setItem('lastTokenUsageTime', String(this.lastTokenUsageTime));
						headers['Authorization'] = `Bearer ${tokenData.token}`;
						return of(request.clone({
							setHeaders: headers
						}));
					})
				);
		}

		this.gettingTokenData = true;
		return of(request.clone({
			setHeaders: headers
		}));
	}

	isTokenInvalid(error: HttpErrorResponse) {
		return (error.status === 440 || error.status === 401 ||
			(error.status === 400 && error.error && error.error.errors && error.error.errors.length > 0 && error.error.errors[0].rawMessage === 'Session token authentication failure.'));
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (!request.url.startsWith(environment.dotRezApiBaseUrl)) {
			return next.handle(request);
		}

		return this.getNewRequest(request)
			.pipe(
				tap(() => this.store.dispatch(new AppSetLoading(true))),
				mergeMap(newRequest => next.handle(newRequest)
					.pipe(
						catchError(error => {
							if (error instanceof HttpErrorResponse) {
								if (this.isTokenInvalid(error)) {
									this.store.dispatch(new AuthSetTokenData({}));
								}
							}
							return _throw(error);
						})
					)),
				finalize(() => this.store.dispatch(new AppSetLoading(false)))
			);
	}
}
