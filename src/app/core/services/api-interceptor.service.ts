import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/take';
import { Store } from '@ngrx/store';

import { CoreState } from '../store';
import * as AppActions from '../store/actions/app.action';
import * as AvailabilityActions from '../store/actions/availability.action';
import * as BookingActions from '../store/actions/booking.action';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
	token$: Observable<string>;
	token: string;
	idleTimeoutInMinutes: number;
	lastTokenUsageInMilliseconds: number;
	gettingToken = false;
	bufferTimeInSeconds = 30;

	constructor(private store: Store<CoreState>) {
		this.gettingToken = true;
		this.token$ = store.select(state => state.app.tokenData)
			.take(1)
			.map(tokenData => {
				this.token = tokenData && tokenData.token;
				this.idleTimeoutInMinutes = tokenData && tokenData.idleTimeoutInMinutes;
				return this.token;
			})
			.share()
			.finally(() => this.gettingToken = false);
	}

	isTokenExpired(): boolean {
		const currentTimeInMilliseconds = new Date().getTime();
		const timeSinceLastTokenUsageInMilliseconds = currentTimeInMilliseconds - this.lastTokenUsageInMilliseconds;
		this.lastTokenUsageInMilliseconds = currentTimeInMilliseconds;

		return (timeSinceLastTokenUsageInMilliseconds > ((this.idleTimeoutInMinutes * 60) - this.bufferTimeInSeconds) * 1000);
	}

	getToken(): Observable<string> {
		if (this.gettingToken) {
			return this.token$;
		}

		if (!this.token || this.isTokenExpired()) {
			this.gettingToken = true;
			this.store.dispatch(new AppActions.GetTokenData());
			return this.token$ = this.store.select(state => state.app.tokenData)
				.take(1)
				.map(tokenData => {
					this.token = tokenData && tokenData.token;
					this.idleTimeoutInMinutes = tokenData && tokenData.idleTimeoutInMinutes;
					return this.token;
				})
				.share()
				.finally(() => this.gettingToken = false);
		}

		return Observable.of(this.token);
	}

	getNewRequest(request: HttpRequest<any>): Observable<HttpRequest<any>> {
		const headers = {
			'Content-Type': 'application/json',
			'Ocp-Apim-Subscription-Key': environment.navitaireSubscriptionKey
		};

		if (!(request.url.endsWith('token') && request.method === 'POST')) {
			return this.getToken()
				.mergeMap(token => {
					headers['Authorization'] = `Bearer ${token}`;
					return Observable.of(request.clone({
						setHeaders: headers
					}));
				});
		}

		return Observable.of(request.clone({
			setHeaders: headers
		}));
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.store.dispatch(new AppActions.SetLoading(true));

		return this.getNewRequest(request)
			.mergeMap(newRequest => next.handle(newRequest))
			.catch(response => {
				if (response instanceof HttpErrorResponse) {
					console.error(response);
					const error = response as HttpErrorResponse;
					if (error.status === 440 || error.status === 401) {
					}
				}
				return Observable.throw(response);
			})
			.finally(() => this.store.dispatch(new AppActions.SetLoading(false)));
	}
}
