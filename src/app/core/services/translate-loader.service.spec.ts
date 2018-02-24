import { Injector } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from './translate-loader.service';

describe('TranslateLoaderService', () => {
	let injector: Injector;
	let translate: TranslateService;
	let http: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useFactory: (http1: HttpClient) => new MultiTranslateHttpLoader(http1, [
						{prefix: './assets/i18n/home/', suffix: '.json'},
						{prefix: './assets/i18n/availability/', suffix: '.json'}
					]),
						deps: [HttpClient]
					}
				})
			],
			providers: [TranslateService]
		});
		injector = getTestBed();
		translate = TestBed.get(TranslateService);
		http = TestBed.get(HttpTestingController);
	});

	afterEach(() => {
		injector = undefined;
		translate = undefined;
		http = undefined;
	});

	it('should be able to provide MultiTranslateHttpLoader', () => {
		expect(MultiTranslateHttpLoader).toBeDefined();
		expect(translate.currentLoader).toBeDefined();
		expect(translate.currentLoader instanceof MultiTranslateHttpLoader).toBeTruthy();
	});

	it('should be able to get translations', () => {
		translate.use('en-US');

		// this will request the translation from the backend because we use a static files loader for TranslateService
		translate.get('TEST').subscribe((res: string) => {
			expect(res).toEqual('This is a test');
		});

		// mock response after the xhr request, otherwise it will be undefined
		http.expectOne('./assets/i18n/availability/en-US.json').flush({ 'TEST': 'This is a test', 'TEST2': 'This is another test' });

		// this will request the translation from downloaded translations without making a request to the backend
		translate.get('TEST2').subscribe((res: string) => {
			expect(res).toEqual('This is another test');
		});
	});

	it('should request all of the translation files passed in', () => {
		translate.use('en-US');
		http.expectOne('./assets/i18n/home/en-US.json').flush({ 'TEST': 'This is a test', 'TEST2': 'This is another test' });
		http.expectOne('./assets/i18n/availability/en-US.json').flush({ 'TEST': 'This is a test', 'TEST2': 'This is another test' });
	});
});
