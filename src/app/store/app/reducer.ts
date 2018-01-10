import * as AppActions from './actions';

export interface State {
  errors: object[];
  token: string;
  loading: number;
}

const initialState: State = {
  errors: [],
  token: null,
  loading: 0
};

export function reducer(state = initialState, action: AppActions.All): State {
  switch (action.type) {
    case AppActions.SET_LOADING:
      return {
        ...state,
        loading: action.payload ? state.loading + 1 : state.loading - 1
      };

    case AppActions.ADD_ERROR:
      return {
        ...state,
        errors: state.errors.concat(action.payload)
      };

    case AppActions.CLEAR_ERRORS:
      return {
        ...state,
        errors: []
      };

    case AppActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };

    default:
      return state;
  }
}
