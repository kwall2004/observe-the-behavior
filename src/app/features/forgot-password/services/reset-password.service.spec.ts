import { TestBed, getTestBed } from '@angular/core/testing';

import { ResetPasswordService } from './reset-password.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ResetPasswordService', () => {
	let injector: TestBed;
	let service: ResetPasswordService;
	let httpTestingController: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [ResetPasswordService]
		});
		injector = getTestBed();
		service = injector.get(ResetPasswordService);
		httpTestingController = injector.get(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
