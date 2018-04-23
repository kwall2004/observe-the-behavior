import { SsrActionTypes, SsrAction } from '../actions/ssr.action';

export interface State {
	availableSsrs: any;
}

export const INITIAL_STATE: State = {
	availableSsrs: {}
};

export function reducer(state: State = INITIAL_STATE, action: SsrAction): State {
	switch (action.type) {
		case SsrActionTypes.LOAD_AVAILABILITY_SUCCESS:
			return {
				...state,
				availableSsrs: { ...action.payload.data }
			};
	}
	return state;
}
