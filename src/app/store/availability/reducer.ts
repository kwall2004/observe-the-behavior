import * as AvailabilityActions from './actions';

export interface State {
  loading: boolean;
  cities: object;
  origin: string;
  destination: string;
  beginDate: Date;
  data: object;
  error: object;
}

const initialState: State = {
  loading: false,
  cities: null,
  origin: null,
  destination: null,
  beginDate: null,
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

    case AvailabilityActions.GET_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        origin: action.payload['data'][0]['cityCode'],
        destination: action.payload['data'][0]['cityCode']
      }

    case AvailabilityActions.GET_CITIES_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case AvailabilityActions.SET_ORIGIN:
      return {
        ...state,
        origin: action.payload
      }

    case AvailabilityActions.SET_DESTINATION:
      return {
        ...state,
        destination: action.payload
      }

    case AvailabilityActions.SET_BEGIN_DATE:
      return {
        ...state,
        beginDate: action.payload
      }

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
