import * as fromApp from '../actions/app.action';

export interface State {
  errors: object[];
  token: string;
  loading: number;
}

const initialState: State = {
  errors: [],
  token: localStorage.getItem('token'),
  loading: 0
};

export function reducer(state = initialState, action: fromApp.AppAction): State {
  switch (action.type) {
    case fromApp.SET_LOADING:
      return {
        ...state,
        loading: action.payload ? state.loading + 1 : state.loading - 1
      };

    case fromApp.ADD_ERROR:
      return {
        ...state,
        errors: state.errors.concat(action.payload)
      };

    case fromApp.CLEAR_ERRORS:
      return {
        ...state,
        errors: []
      };

    case fromApp.SET_TOKEN:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload
      };

    default:
      return state;
  }
}
