import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, finalize, map, switchMap, share, skipWhile, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

import { CoreState } from '../store';
import * as AppActions from '../store/actions/app.action';
import * as AvailabilityActions from '../store/actions/availability.action';
import * as BookingActions from '../store/actions/booking.action';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
	tokenData$: Observable<any>;
	tokenData: any;
	gettingTokenData = false;
	lastTokenUsageTime: number;
	bufferTime = 30000;

	constructor(private store: Store<CoreState>) {
		this.gettingTokenData = true;
		this.tokenData$ = store.select(state => state.app.tokenData)
			.pipe(
				skipWhile(tokenData => {
					if (!this.tokenData) {
						this.tokenData = tokenData;
						this.lastTokenUsageTime = Number(localStorage.getItem('lastTokenUsageTime'));
						return this.isTokenExpired(tokenData);
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

	isTokenExpired(tokenData: any): boolean {
		const currentTime = new Date().getTime();
		const timeSinceLastUsage = currentTime - this.lastTokenUsageTime;
		const idleTimeout = (tokenData.idleTimeoutInMinutes * 60) * 1000;

		if (!tokenData.token || timeSinceLastUsage > (idleTimeout - this.bufferTime)) {
			this.gettingTokenData = true;
			this.store.dispatch(new AppActions.GetTokenData());
			return true;
		}

		return false;
	}

	getTokenData(): Observable<any> {
		if (this.gettingTokenData || this.isTokenExpired(this.tokenData)) {
			return this.tokenData$;
		}

		return of(this.tokenData);
	}

	getNewRequest(request: HttpRequest<any>): Observable<HttpRequest<any>> {
		const headers = {
			'Content-Type': 'application/json',
			'Ocp-Apim-Subscription-Key': environment.navitaireSubscriptionKey
		};

		if (!(request.url.endsWith('token') && request.method === 'POST')) {
			return this.getTokenData()
				.pipe(
					switchMap(tokenData => {
						this.lastTokenUsageTime = new Date().getTime();
						localStorage.setItem('lastTokenUsageTime', String(this.lastTokenUsageTime));
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

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (!request.url.startsWith(environment.navitaireApiUrl)) {
			return next.handle(request);
		}

		this.store.dispatch(new AppActions.SetLoading(true));

		return this.getNewRequest(request)
			.pipe(
				switchMap(newRequest => {
					return next.handle(newRequest)
						.pipe(
							catchError(response => {
								if (response instanceof HttpErrorResponse) {
									console.error(response);
									const error = response as HttpErrorResponse;
									if (error.status === 440 || error.status === 401) {
										this.store.dispatch(new AppActions.SetTokenData(null));
									}
								}
								return _throw(response);
							}),
							finalize(() => {
								this.store.dispatch(new AppActions.SetLoading(false));
							})
						);
				})
			);
	}
}
