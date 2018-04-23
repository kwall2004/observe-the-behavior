import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { StoreModule, Store } from '@ngrx/store';

import { CoreState, reducers } from '../reducers';

import { CultureEffects } from './culture.effect';
import { CultureUpdateCulture, AppStart } from '../actions';
import { TranslateService } from '@ngx-translate/core';


class MockTranslateService {
	setDefaultLang() { }
	use() { }
}

describe('CultureEffects', () => {
	let effects: CultureEffects;
	let actions: ReplaySubject<any>;
	let store: Store<CoreState>;
	let translate: TranslateService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				StoreModule.forRoot(reducers)
			],
			providers: [
				CultureEffects,
				{
					provide: TranslateService,
					useClass: MockTranslateService
				},
				provideMockActions(() => actions)
			],
		});

		effects = TestBed.get(CultureEffects);

		store = TestBed.get(Store);
		spyOn(store, 'dispatch').and.callThrough();

		translate = TestBed.get(TranslateService);
	});

	it('sets culture', () => {
		spyOn(translate, 'setDefaultLang').and.callThrough();
		spyOn(translate, 'use').and.callThrough();

		actions = new ReplaySubject(1);
		actions.next(new AppStart());

		effects.setCulture$.subscribe(result => {
			expect(translate.use).toHaveBeenCalledWith('en-us');
			expect(result).toEqual(new CultureUpdateCulture({ cultureCode: 'en-US' }));
		});
	});

	it('updates culture', () => {
		spyOn(translate, 'use').and.callThrough();

		actions = new ReplaySubject(1);
		actions.next(new CultureUpdateCulture({ cultureCode: 'test' }));

		effects.setCulture$.subscribe(() => {
			expect(translate.use).toHaveBeenCalledWith('test');
		});
	});
});
