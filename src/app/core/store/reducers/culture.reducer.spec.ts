import { reducer } from './culture.reducer';
import { CultureUpdateCulture } from '../actions';

describe('culture reducer', () => {
	it('returns updated state on CultureUpdateCulture', () => {
		expect(reducer(undefined, new CultureUpdateCulture({ cultureCode: 'test' }))).toEqual({
			culture: 'test'
		});
	});
});
