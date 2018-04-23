import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { cold } from 'jasmine-marbles';

import { AppClearErrors, AppAddError, ResourceGetStations, ResourceSetStations } from '../actions';
import { ResourceService } from '../../services';
import { ResourceEffects } from './resource.effect';


class MockApiService {
	getStations() { }
}

@Component({
	template: ''
})
class MockComponent { }

describe('ResourceEffects', () => {
	let effects: ResourceEffects;
	let actions: Observable<any>;
	let resourceService: ResourceService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockComponent
			],
			providers: [
				ResourceEffects,
				{
					provide: ResourceService,
					useClass: MockApiService
				},
				provideMockActions(() => actions)
			],
		});

		effects = TestBed.get(ResourceEffects);
		resourceService = TestBed.get(ResourceService);
	});

	it('gets stations', () => {
		spyOn(resourceService, 'getStations').and.returnValue(of(
			{
				data: [
					{
						stationCode: 'test',
						shortName: 'test'
					}
				]
			}
		));

		const marbles = {
			a: new ResourceGetStations(),
			b: new AppClearErrors(),
			c: new ResourceSetStations([{
				stationCode: 'test',
				shortName: 'test'
			}])
		};

		actions = cold('a', marbles);
		const expected = cold('(bc)', marbles);

		expect(effects.getStations$).toBeObservable(expected);
	});

	it('handles get stations error', () => {
		const http = new ReplaySubject(1);
		spyOn(resourceService, 'getStations').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		const marbles = {
			a: new ResourceGetStations(),
			b: new AppClearErrors(),
			c: new AppAddError({ text: 'test' })
		};

		actions = cold('a', marbles);
		const expected = cold('(bc)', marbles);

		expect(effects.getStations$).toBeObservable(expected);
	});
});
