import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '@env/environment';

import { StoreModule, Store } from '@ngrx/store';

import * as fromRoot from '../store/reducers';

import { ApiInterceptorService } from './api-interceptor.service';

describe('ApiInterceptorService', () => {
	let injector: TestBed;
	let service: ApiInterceptorService;
	let httpClient: HttpClient;
	let mockHttpClient: HttpTestingController;
	let store: Store<fromRoot.CoreState>;

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

	it('requests token', () => {
		spyOn(localStorage, 'getItem').and.callFake(key => {
			return null;
		});

		httpClient.get(environment.navitaireApiUrl).subscribe(response => {
			expect(response).toBeTruthy();
		});

		const req = mockHttpClient.expectOne(`${environment.navitaireApiUrl}v1/token`);
		expect(req.request.method).toBe('POST');
	});
});
