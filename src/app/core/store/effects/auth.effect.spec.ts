import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { cold } from 'jasmine-marbles';

import { AuthEffects } from './auth.effect';
import { AuthGetTokenData, AuthSetTokenData, AppClearErrors, AppAddError, BookingSetData, ShoppingCartClearVisitedPages, FlightClearSearchResults } from '../actions';
import { TokenService, UserService, LocalStorageService } from '../../services';
import { MockLocalStorageService } from '../../../testing';


class MockApiService {
	getTokenData() { }
}

describe('AuthEffects', () => {
	let effects: AuthEffects;
	let actions: Observable<any>;
	let tokenService: TokenService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			providers: [
				AuthEffects,
				{
					provide: TokenService,
					useClass: MockApiService
				},
				{
					provide: UserService,
					useClass: MockApiService
				},
				{
					provide: LocalStorageService,
					useClass: MockLocalStorageService
				},
				provideMockActions(() => actions)
			],
		});

		effects = TestBed.get(AuthEffects);
		tokenService = TestBed.get(TokenService);
	});

	it('should get token data', () => {
		spyOn(tokenService, 'getTokenData').and.returnValue(of(
			{
				data: {
					token: 'test',
					idleTimeoutInMinutes: 15
				}
			}
		));

		const marbles = {
			a: new AuthGetTokenData(),
			b: new AppClearErrors(),
			c: new AuthSetTokenData({ token: 'test', idleTimeoutInMinutes: 15 }),
			d: new BookingSetData(null),
			e: new ShoppingCartClearVisitedPages(),
			f: new FlightClearSearchResults()
		};

		actions = cold('a', marbles);
		const expected = cold('(bcdef)', marbles);

		expect(effects.getTokenData$).toBeObservable(expected);
	});

	it('should handle get token data error', () => {
		const http = new ReplaySubject(1);
		spyOn(tokenService, 'getTokenData').and.returnValue(http.asObservable());
		http.error({ text: 'test' });

		const marbles = {
			a: new AuthGetTokenData(),
			b: new AppClearErrors(),
			c: new AppAddError({ text: 'test' })
		};

		actions = cold('a', marbles);
		const expected = cold('(bc)', marbles);

		expect(effects.getTokenData$).toBeObservable(expected);
	});
});
