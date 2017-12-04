import * as BookingActions from './actions';

export interface State {
  loading: boolean;
  data: object;
}

const initialState: State = {
  loading: false,
  data: null
}

export function reducer(state = initialState, action: BookingActions.All): State {
  switch (action.type) {
    case BookingActions.SET_DATA:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
}
