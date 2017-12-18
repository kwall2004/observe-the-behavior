import * as DynamicContentActions from './actions';

export interface State {
  data: object;
}

const initialState: State = {
  data: null
};

export function reducer(state = initialState, action: DynamicContentActions.All): State {
  switch (action.type) {
    case DynamicContentActions.SET_CONTENT:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
}
