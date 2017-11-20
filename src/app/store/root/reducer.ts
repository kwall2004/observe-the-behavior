import * as RootActions from './actions';

export interface State {
  token: string;
}

const initialState: State = {
  token: null
}

export function reducer(state = initialState, action: RootActions.All): State {
  switch (action.type) {
    case RootActions.GET_TOKEN:
      return {
        ...state,
        token: action.payload
      };

    default: 
      return state;
  }
}
