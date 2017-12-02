import * as AppActions from './actions';

export interface State {
  errors: object[];
  token: string;
}

const initialState: State = {
  errors: [],
  token: null
}

export function reducer(state = initialState, action: AppActions.All): State {
  switch (action.type) {
    case AppActions.ADD_ERROR:
      return {
        ...state,
        errors: state.errors.concat(action.payload)
      }

    case AppActions.CLEAR_ERRORS:
      return {
        ...state,
        errors: []
      }

    case AppActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
      
    case AppActions.GET_TOKEN_SUCCESS:
      localStorage.setItem('token', action.payload['data']['token']);
      return {
        ...state,
        token: action.payload['data']['token']
      };

    default: 
      return state;
  }
}
