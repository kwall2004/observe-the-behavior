import { INITIAL_STATE, reducer } from './app.reducer';
import { AppSetLoading, AppAddError, AppClearErrors } from '../actions';

describe('app reducer', () => {
	// it('does nothing on AppStart', () => {
	// 	expect(reducer(undefined, new AppStart())).toEqual(INITIAL_STATE);
	// });

	it('returns updated state on AppSetLoading(true)', () => {
		expect(reducer(undefined, new AppSetLoading(true))).toEqual({
			...INITIAL_STATE,
			loading: 1
		});
	});

	it('returns updated state on AppSetLoading(false)', () => {
		const state = reducer(undefined, new AppSetLoading(true));

		expect(reducer(state, new AppSetLoading(false))).toEqual({
			...INITIAL_STATE,
			loading: 0
		});
	});

	it('returns updated state on AppAddError', () => {
		expect(reducer(undefined, new AppAddError({ test: 'test' }))).toEqual({
			...INITIAL_STATE,
			errors: [{ test: 'test' }]
		});
	});

	it('returns updated state on AppClearErrors', () => {
		const state = reducer(undefined, new AppAddError({ test: 'test' }));

		expect(reducer(state, new AppClearErrors())).toEqual({
			...INITIAL_STATE,
			errors: []
		});
	});
});
