import * as availability from './availability.action';

export interface State {
  startDate: Date;
  loading: boolean;
  data: object;
  error: object;
}

const initialState: State = {
  startDate: new Date(),
  loading: false,
  data: null,
  error: null
}

export function reducer(state = initialState, action: availability.Actions) {
  switch (action.type) {
    case availability.GET_FLIGHTS_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default: 
      return state;
  }
}