import { TestBed, getTestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
	let injector: TestBed;
	let service: LocalStorageService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LocalStorageService
			]
		});
		injector = getTestBed();
		service = injector.get(LocalStorageService);
	});

	it('is created', () => {
		expect(service).toBeTruthy();
	});
});
