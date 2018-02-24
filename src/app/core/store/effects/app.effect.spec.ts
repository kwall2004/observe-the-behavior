import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

import { CoreState, reducers } from '../reducers';

import { AppEffects } from './app.effect';
import {
	AppClearErrors, AppAddError,
	AppGetTokenData, AppSetTokenData,
	BookingSetData
} from '../actions';
import { NavitaireApiService } from '../../services';

class MockApiService {
	getTokenData() { }
}

describe('AppEffects', () => {
	let effects: AppEffects;
	let actions: ReplaySubject<any>;
	let store: Store<CoreState>;
	let apiService: NavitaireApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				StoreModule.forRoot(reducers)
			],
			providers: [
				AppEffects,
				{
					provide: NavitaireApiService,
					useClass: MockApiService
				},
				provideMockActions(() => actions)
			],
		});

		effects = TestBed.get(AppEffects);

		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		apiService = TestBed.get(NavitaireApiService);
	});

	it('should get token data', () => {
		spyOn(apiService, 'getTokenData').and.returnValue(of(
			{
				data: {
					token: 'test',
					idleTimeoutInMinutes: 15
				}
			}
		));

		actions = new ReplaySubject(1);
		actions.next(new AppGetTokenData());

		effects.getTokenData$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(jasmine.matchersUtil.equals(result, new AppSetTokenData({
				token: 'test',
				idleTimeoutInMinutes: 15
			})) || jasmine.matchersUtil.equals(result, new BookingSetData(null))).toBe(true);
		});
	});

	it('should handle get token data error', () => {
		const http = new ReplaySubject(1);
		spyOn(apiService, 'getTokenData').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		actions = new ReplaySubject(1);
		actions.next(new AppGetTokenData());

		effects.getTokenData$.subscribe(result => {
			expect(store.dispatch).toHaveBeenCalledWith(new AppClearErrors());
			expect(store.dispatch).toHaveBeenCalledWith(new AppAddError({ text: 'test' }));
			expect(jasmine.matchersUtil.equals(result, new AppSetTokenData(null)) || jasmine.matchersUtil.equals(result, new BookingSetData(null))).toBe(true);
		});
	});
});
