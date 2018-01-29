import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { StoreModule, Store } from '@ngrx/store';

import * as fromRoot from '../store/reducers';

import { ApiInterceptorService } from './api-interceptor.service';

describe('ApiInterceptorService', () => {
  let injector: TestBed;
  let service: ApiInterceptorService;
  let httpClient: HttpClient;
  let mockHttpClient: HttpTestingController;
  let store: Store<fromRoot.State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(fromRoot.reducers)
      ],
      providers: [
        ApiInterceptorService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiInterceptorService,
          multi: true
        }
      ]
    });
    injector = getTestBed();
    service = injector.get(ApiInterceptorService);
    httpClient = injector.get(HttpClient);
    mockHttpClient = injector.get(HttpTestingController);

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  afterEach(() => {
    mockHttpClient.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add headers', () => {
    spyOn(localStorage, 'getItem').and.callFake(key => {
      return 'test';
    });

    httpClient.get(environment.navitaireApiUrl).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = mockHttpClient.expectOne(environment.navitaireApiUrl);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.has('Content-Type') && req.request.headers.get('Content-Type') === 'application/json').toBeTruthy();
    expect(req.request.headers.has('Ocp-Apim-Subscription-Key') && req.request.headers.get('Ocp-Apim-Subscription-Key') === environment.navitaireSubscriptionKey).toBeTruthy();
    expect(req.request.headers.has('Authorization') && req.request.headers.get('Authorization') === 'Bearer test').toBeTruthy();
  });
});
