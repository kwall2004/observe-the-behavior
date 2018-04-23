import { reducer, State } from './option.reducer';
import { OptionSetFlex, OptionSetShortCutSecurity, OptionSetShortCutBoarding, OptionSetCheckIn } from '../actions';

describe('Options Page Reducer', () => {

	const initialState: State = {
		optionsInput: {
			flexSelected: false,
			shortCutSecuritySelection: null,
			shortCutBoardingSelected: false,
			checkInSelection: null
		}
	};

	const afterSetFlex: State = {
		optionsInput: {
			flexSelected: true,
			shortCutSecuritySelection: null,
			shortCutBoardingSelected: false,
			checkInSelection: null
		}
	};

	const afterSetShortcutSecurity: State = {
		optionsInput: {
			flexSelected: false,
			shortCutSecuritySelection: [true, false, true, false],
			shortCutBoardingSelected: false,
			checkInSelection: null
		}
	};

	const afterSetShortcutBoarding: State = {
		optionsInput: {
			flexSelected: false,
			shortCutSecuritySelection: null,
			shortCutBoardingSelected: true,
			checkInSelection: null
		}
	};

	const afterSetCheckIn: State = {
		optionsInput: {
			flexSelected: false,
			shortCutSecuritySelection: null,
			shortCutBoardingSelected: false,
			checkInSelection: 'gonzo'
		}
	};

	it('updates state on set flex', () => {
		expect(
			reducer(initialState, new OptionSetFlex(true))
		).toEqual(afterSetFlex);
	});

	it('updates state on set shortcut security', () => {
		expect(
			reducer(initialState, new OptionSetShortCutSecurity([true, false, true, false]))
		).toEqual(afterSetShortcutSecurity);
	});

	it('updates state on set shortcut boarding', () => {
		expect(
			reducer(initialState, new OptionSetShortCutBoarding(true))
		).toEqual(afterSetShortcutBoarding);
	});

	it('updates state on set check in', () => {
		expect(
			reducer(initialState, new OptionSetCheckIn('gonzo'))
		).toEqual(afterSetCheckIn);
	});
});
