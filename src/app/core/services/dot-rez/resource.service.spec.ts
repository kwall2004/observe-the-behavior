import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';

import { ResourceService } from './resource.service';

describe('ResourceService', () => {
	let injector: TestBed;
	let service: ResourceService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				ResourceService
			]
		});
		injector = getTestBed();
		service = injector.get(ResourceService);
		httpTestingController = injector.get(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('is created', () => {
		expect(service).toBeTruthy();
	});

	it('gets stations', () => {
		service.getStations().subscribe();

		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}v1/resources/Stations?ActiveOnly=true`);
		expect(req.request.method).toBe('GET');
	});

	it('gets states', () => {
		service.getProvinceStates().subscribe();
		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}v1/resources/ProvinceStates`);
		expect(req.request.method).toBe('GET');
	});

	it('gets countries', () => {
		service.getCountries().subscribe();
		const req = httpTestingController.expectOne(`${environment.dotRezApiBaseUrl}v1/resources/Countries`);
		expect(req.request.method).toBe('GET');
	});
});
