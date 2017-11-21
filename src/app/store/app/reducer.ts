import * as AppActions from './actions';

export interface State {
  token: string;
}

const initialState: State = {
  token: null
}

export function reducer(state = initialState, action: AppActions.All): State {
  switch (action.type) {
    case AppActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
      
    case AppActions.GET_TOKEN_SUCCESS:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload
      };

    default: 
      return state;
  }
}
