import * as AvailabilityActions from './actions';

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

export function reducer(state = initialState, action: AvailabilityActions.All): State {
  switch (action.type) {
    case AvailabilityActions.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
      
    case AvailabilityActions.SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case AvailabilityActions.SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default: 
      return state;
  }
}
