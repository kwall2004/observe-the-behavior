import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/reducers';
import * as AppActions from '../store/app/actions';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
  constructor(
    private store: Store<fromRoot.State>
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.subscriptionKey,
    };

    if (!(request.url.endsWith('token') && request.method === 'POST')) {
      headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    }

    let newRequest = request.clone({
      setHeaders: headers
    });

    this.store.dispatch(new AppActions.RemoveErrors());
    this.store.dispatch(new AppActions.SetLoading(true));
    return next.handle(newRequest)
      .catch(response => {
        if (response instanceof HttpErrorResponse) {
          console.error(response);
          this.store.dispatch(new AppActions.AddError(response));
          return Observable.of(response);
        }
        return Observable.throw(response);
      })
      .finally(() => this.store.dispatch(new AppActions.SetLoading(false)));
  }
}
