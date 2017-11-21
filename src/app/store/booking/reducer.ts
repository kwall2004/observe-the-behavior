import * as BookingActions from './actions';

export interface State {
  loading: boolean;
  data: object;
  error: object;
}

const initialState: State = {
  loading: false,
  data: null,
  error: null
}

export function reducer(state = initialState, action: BookingActions.All): State {
  switch (action.type) {
    case BookingActions.SELL_TRIP_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case BookingActions.SELL_TRIP_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
